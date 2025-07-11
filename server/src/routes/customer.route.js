import express from "express"; 
import { customerController } from "../controllers/index.js";
const router = express.Router(); 

router.post("/", customerController.add);
router.get("/", customerController.getAll);
router.get("/search/phone/:phone", customerController.getByPhone);

router.put("/:id", customerController.update);
router.delete("/:id", customerController.remove);

export default router;
