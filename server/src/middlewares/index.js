import adminAuth from "./admin/auth.middleware.js";
import billsAuth from "./bills/auth.middleware.js";


export const adminAuthMiddleware = adminAuth.auth;
export const billsAuthMiddleware = billsAuth.auth;
