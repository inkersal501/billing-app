import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    company: {type: mongoose.Schema.Types.ObjectId, ref:"Company" },
    name: String,
    email: { type: String, unique: [true, "Email already exist"] },
    phone: { type: String, unique: [true, "Phone already exist"] },
    password: String,
    role: {type: String, enum: ["Staff", "Admin"], default: "Staff" }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
