import { Router } from "express";
import { addAuthor, deleteAuthorById, getAllAuthors, getAuthorById, updateAuthor } from "../controllers/authorController.js";

const authorRouter = Router();
authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthorById)
authorRouter.post("/", addAuthor)
authorRouter.put("/:id", updateAuthor)
authorRouter.delete("/:id", deleteAuthorById)

export default authorRouter;