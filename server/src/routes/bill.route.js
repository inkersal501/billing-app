import express from "express"; 
import { billController } from "../controllers/index.js";
const router = express.Router();
 
router.post("/", billController.create);
router.get("/", billController.getAll);

export default router;
