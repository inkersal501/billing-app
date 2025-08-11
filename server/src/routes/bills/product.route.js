import express from "express"; 
import { billsControllers } from "../../controllers/index.js";
const {add, getAll, update, updateStatus, remove} = billsControllers.productController;
const router = express.Router();
 
router.post("/", add);
router.get("/", getAll);
router.put("/:id", update);
router.patch("/status/:id", updateStatus);
router.delete("/:id", remove);

export default router;
