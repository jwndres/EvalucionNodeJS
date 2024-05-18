import express from "express";
import {
  createLiquor,
  deleteLiquor,
  getLiquor,
  getLiquors,
  updateLiquor,
} from "../controllers/liquors.controller";
import { verifyJWT } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", verifyJWT, getLiquors);
router.post("/", verifyJWT, createLiquor);
router.get("/:id", verifyJWT, getLiquor);
router.put("/:id", verifyJWT, updateLiquor);
router.delete("/:id", verifyJWT, deleteLiquor);

export default router;
