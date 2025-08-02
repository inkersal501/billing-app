import bcrypt from "bcryptjs";
import { companyModel, userModel } from "../../models/index.js"; 

export const getCompany = async ()=> {
    try {
        const companies = await companyModel.find();    
        return companies;
    } catch (error) {
        throw new Error("Email already exists "+ error.message);
    }
    
};

export const createCompany = async (data) => {
    const check = await companyModel.findOne({email: data.email});
    if(check){
        throw new Error("Email already exists");
    }else{
        const company = await companyModel.create({...data});
        return company;
    }
};

export const getCompanyDetails = async (id) => {
    const company = await companyModel.findById(id);
    if(!company)
        throw new Error("Details Not found")
    return company;
};
 
export const updateCompany = async (data) => {
    const companyId = data._id;
    try {
        const company = await companyModel.findById(companyId);
        if(!company) throw new Error("Customer details not found");
        company.name = data.name;
        company.email = data.email;
        company.phone = data.phone;
        company.address = data.address;
        company.gstNumber = data.gstNumber;
        company.logoUrl = data.logoUrl;
        await company.save();
        return company;
    } catch (error) {
        throw new Error(error.message);
    }    
};


export const getCompanyUsers = async (company) => {
    const users = await userModel.find({company});
    if(!users)
        throw new Error("No Users Not found")
    return users;
};

export const createCompanyUser = async (company, data) => {
    const check = await userModel.findOne({company, email:data.email});
    if(check)
        throw new Error("Email already exists");
    data.password = await bcrypt.hash(data.password, 10);
    const user = await userModel.create({...data, company});
    return user;
};

export const updateCompanyUser = async (company, data) => {
    const userId = data._id;
    const user = await userModel.findOne({_id : userId, company});
    if(!user)
        throw new Error("User not found.");
    user.name = data.name;
    user.email = data.email;
    user.phone = data.phone;
    user.role  = data.role;
    await user.save();
    return user;
};