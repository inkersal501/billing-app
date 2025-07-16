import express from "express"; 
import { userControllers } from "../../controllers/index.js";
const {create, getAll} = userControllers.billController;
const router = express.Router();

router.post("/", create);
router.get("/", getAll);

export default router;
