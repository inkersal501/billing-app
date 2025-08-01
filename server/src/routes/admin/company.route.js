import express from "express";
import { adminControllers } from "../../controllers/index.js";  
const { getCompany, createCompany, updateCompany} = adminControllers.companyController;
const router = express.Router(); 

router.get("/", getCompany);
router.post("/", createCompany);
router.patch("/", updateCompany);

export default router;
