import { Router } from "express";
import { addBook, deleteBookById, getAllbooks, getBooksById, updateBook } from "../controllers/bookController.js";
const bookRouter =Router();
bookRouter.get('/',getAllbooks); 
bookRouter.get('/:id',getBooksById); 
bookRouter.post('/addbook',addBook); 
bookRouter.put('/update/:id',updateBook); 
bookRouter.delete('/:id/deletebook',deleteBookById); 


export default bookRouter;
