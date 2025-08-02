import express from "express";
import { adminControllers } from "../../controllers/index.js";  
const { getCompany, createCompany, updateCompany, getCompanyDetails, getCompanyUsers, createCompanyUser, updateCompanyUser} = adminControllers.companyController;
const router = express.Router(); 

router.get("/", getCompany);
router.post("/", createCompany);
router.patch("/", updateCompany);

router.get("/:id", getCompanyDetails);
router.get("/users/:companyId", getCompanyUsers);
router.post("/users/:companyId", createCompanyUser);
router.patch("/users/:companyId", updateCompanyUser);

export default router;
