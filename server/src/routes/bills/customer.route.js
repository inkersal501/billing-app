import express from "express"; 
import { billsControllers } from "../../controllers/index.js";
const  {add, getAll, getByPhone, update, remove} = billsControllers.customerController;
const router = express.Router(); 

router.post("/", add);
router.get("/", getAll);
router.get("/search/phone/:phone", getByPhone);

router.put("/:id", update);
router.delete("/:id", remove);

export default router;
