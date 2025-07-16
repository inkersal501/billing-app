import express from "express";
import { adminControllers } from "../../controllers/index.js";  
const { getCompany, createCompany} = adminControllers.companyController;
const router = express.Router(); 

router.get("/", getCompany);
router.post("/", createCompany);
 
export default router;
