import express from "express"; 
import { billsControllers } from "../../controllers/index.js";
const {create, getAll} = billsControllers.billController;
const router = express.Router();

router.post("/", create);
router.get("/", getAll);

export default router;
