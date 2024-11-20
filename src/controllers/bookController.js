import bookModel from "../models/book.model.js";

// Get all books
export const getAllbooks = async (req, res) => {
    try {
        const books = await bookModel.find({});
        return res.status(200).json({
            message: "All books are fetched successfully",
            books,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

// Get book by ID
export const getBooksById = async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await bookModel.findById(bookId); // Fixed method name
        if (!book) {
            return res.status(404).json({
                message: "Book not found by this ID",
            });
        }
        return res.status(200).json({
            message: "Book fetched successfully by ID",
            book,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

// Add a new book
export const addBook = async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        await newBook.save();
        return res.status(201).json({
            message: "New book added successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

// Update a book
export const updateBook = async (req, res) => {
    try {
        const { bookId } = req.params;
        const { title, author, isbn } = req.body;

        const book = await bookModel.findById(bookId);
        if (!book) {
            return res.status(404).json({
                message: "Book not found by this ID",
            });
        }

        // Update fields
        book.title = title || book.title;
        book.isbn = isbn || book.isbn;
        book.author = author || book.author;

        await book.save();
        return res.status(200).json({
            message: "Book updated successfully",
            book,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

// Delete a book by ID
export const deleteBookById = async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await bookModel.findByIdAndDelete(bookId);
        if (!book) {
            return res.status(404).json({
                message: "Book not found by this ID",
            });
        }
        return res.status(200).json({
            message: "Book deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
