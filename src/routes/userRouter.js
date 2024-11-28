import express from "express";


import { addUser, deleteUser, getAllUsers, getUserById, updateUser, uploadProfilePicture } from "../controllers/userController.js";
import upload from "../middleware/multer.js";

const router = express.Router();
router.get("/u", getAllUsers);
router.get("/u/:id", getUserById);
router.post("/u", addUser);
router.put("/u/:id", updateUser);
router.delete("/u/:id", deleteUser);
router.post("/u/:id/upload-profile-picture", upload.single("profilePicture"), uploadProfilePicture);

export default router;
