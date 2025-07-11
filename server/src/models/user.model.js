import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    company: {type: mongoose.Schema.Types.ObjectId, ref:"Company" },
    name: String,
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    password: String,
    role: {type: String, enum: ["User", "Admin"], default: "User" }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
