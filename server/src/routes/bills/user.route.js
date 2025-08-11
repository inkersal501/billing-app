import { Router } from "express";
import { billsControllers } from "../../controllers/index.js";

const {getUsers, createUser, updateUser} = billsControllers.userController;
const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.patch("/:userId", updateUser);

export default router;