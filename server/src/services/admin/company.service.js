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
 
