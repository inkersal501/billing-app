import { companyModel } from "../../models/index.js"; 

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
 
export const updateCompany = async (data) => {
    const companyId = data._id;
    try {
        const company = await companyModel.findById(companyId);
        company.name = data.name;
        company.email = data.email;
        company.phone = data.phone;
        company.address = data.address;
        company.gstNumber = data.gstNumber;
        company.logoUrl = data.logoUrl;
        await companyModel.save();
        return company;
    } catch (error) {
        throw new Error(error.message);
    }    
};
