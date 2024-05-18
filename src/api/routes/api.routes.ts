import express from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import userLiqour from "./liqour.routes";


const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/liqour", userLiqour);

export default router;
