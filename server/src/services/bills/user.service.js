import { userModel } from "../../models/index.js";

export const getUsers = async (company) => {
    return await userModel.find({company}).select("name email phone role");
};

export const createUser = async (company, data) => {
    return await userModel.create({...data, company});
};

export const updateUser = async (userId, data) => { 
    try {
        const user = await userModel.findById(userId, "_id name email phone role");
        if(!user) throw new Error("User not found");
        user.name = data.name;
        user.email = data.email;
        user.phone = data.phone;
        user.role = data.role; 
        await user.save();
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};