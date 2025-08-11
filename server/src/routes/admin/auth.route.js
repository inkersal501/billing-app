import express from "express";
import { adminControllers } from "../../controllers/index.js";
const { register, login, getAdminUsersList, update} = adminControllers.authController;
import { adminAuthMiddleware } from "../../middlewares/index.js";
const router = express.Router();

// router.post("/register", register);
router.post("/login", login);

router.use(adminAuthMiddleware);
router.post("/user", register);
router.patch("/user", update);
router.get("/users", getAdminUsersList);

export default router;
