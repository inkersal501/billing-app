import { adminModel, billModel, companyModel, loginModel } from "../../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config/config.js";

export const register = async (req) => {
    const check = await adminModel.findOne({email: req.email});
    if(check){
        throw new Error("Admin Email already exist");
    }else{
        const hashed = await bcrypt.hash(req.password, 10);
        const admin = await adminModel.create({ ...req, password: hashed });
        return true; 
    } 
};

export const login = async ({email, password}) => {
    const admin = await adminModel.findOne({ email });
    if (!admin)
        throw new Error("Admin doesn't exist");

    if (!(await bcrypt.compare(password, admin.password)))
        throw new Error("Invalid credentials");

    const token = jwt.sign({ id: admin._id }, config.jwtSecret, {
        expiresIn: config.jwtExpire,
    });
    const {name, phone, role} = admin;
    await loginModel.create({email, token});
  
    return { name, email, phone, role, token };
};

 
export const update = async (data) => {
    const adminId = data._id;
    try {
        const admin = await adminModel.findById(adminId, "_id name email phone role");
        if(!admin) throw new Error("User not found");
        admin.name = data.name;
        admin.email = data.email;
        admin.phone = data.phone;
        admin.role = data.role; 
        await admin.save();
        return admin;
    } catch (error) {
        throw new Error(error.message);
    }    
};


export const getAdminUsersList = async ()=> {
    try {
        const adminusers = await adminModel.find({}, "_id name email phone role");
        return adminusers;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getDashboardData = async ()=>{
    try {
        const companies = await companyModel.count();    
        const bills = await billModel.count();
    } catch (error) {
        throw new Error(error.message);
    }
};
 
