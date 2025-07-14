import mongoose from "mongoose";

const adminSchema  = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    support: String,
    timings: String    
}, {timestamps : true});

const Admin = mongoose.model("Admin", adminSchema, "admin");
export default Admin;