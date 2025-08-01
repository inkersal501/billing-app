import express from "express";
import { adminControllers } from "../../controllers/index.js";
const { register, login, getAdminUsersList, update} = adminControllers.authController;
import { authMiddleware } from "../../middlewares/index.js";
const router = express.Router();

// router.post("/register", register);
router.post("/login", login);

router.use(authMiddleware);
router.post("/user", register);
router.patch("/user", update);
router.get("/users", getAdminUsersList);

export default router;
