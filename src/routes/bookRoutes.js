import { Router } from "express";
import { addBook, deleteBookById, getAllbooks, getBooksById, updateBook, uploadBookCover } from "../controllers/bookController.js";
import upload from "../middleware/multer.js";
const bookRouter =Router();
bookRouter.get('/',getAllbooks); 
bookRouter.get('/:id',getBooksById); 
bookRouter.post('/addbook',addBook); 
bookRouter.put('/update/:id',updateBook); 
bookRouter.delete('/:id/deletebook',deleteBookById); 
bookRouter.post('/books/:id/upload-cover', upload.single('coverImage'), uploadBookCover);


export default bookRouter;
