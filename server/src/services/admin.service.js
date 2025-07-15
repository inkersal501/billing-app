import { adminModel, companyModel, loginModel } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const register = async (req) => {
    const check = await adminModel.findOne({email: req.email});
    if(check){
        throw new Error("Admin Email already exist");
    }else{
        const hashed = await bcrypt.hash(req.password, 10);
        const admin = await adminModel.create({ ...req, password: hashed });
        return true; 
    } 
};

const login = async ({email, password}) => {
    const admin = await adminModel.findOne({ email });
    if (!admin)
        throw new Error("Admin doesn't exist");

    if (!(await bcrypt.compare(password, admin.password)))
        throw new Error("Invalid credentials");

    const token = jwt.sign({ id: admin._id }, config.jwtSecret, {
        expiresIn: config.jwtExpire,
    });
    const {name, phone} = admin;
    await loginModel.create({email, token});
  
    return { name, email, phone, role: "admin", token };
};

const getCompany = async ()=> {
    try {
        const companies = await companyModel.find();    
        return companies;
    } catch (error) {
        throw new Error("Email already exists "+ error.message);
    }
    
};

const createCompany = async (data) => {
    const check = await companyModel.findOne({email: data.email});
    if(check){
        throw new Error("Email already exists");
    }else{
        const company = await companyModel.create({...data});
        return company;
    }
};

export default {register, login, getCompany, createCompany};
