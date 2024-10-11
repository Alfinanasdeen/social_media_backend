import express from "express";
import {
  getUser,
  getUserFriends,
  getRemovedFriends,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/frients", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/friendsId", verifyToken, getRemovedFriends);

export default router;
