import express from "express"; 
import { productController } from "../controllers/index.js";
const router = express.Router();
 
router.post("/", productController.add);
router.get("/", productController.getAll);
router.put("/:id", productController.update);
router.patch("/status/:id", productController.updateStatus);
router.delete("/:id", productController.remove);

export default router;
