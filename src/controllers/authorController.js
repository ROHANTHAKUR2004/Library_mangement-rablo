import authorModel from "../models/author.model.js";


export const getAllAuthors = async (req, res) => {
    try {
        const authors = await authorModel.find({});
        return res.status(200).json({
            message: "All authors are fetched successfully",
            authors,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};


export const getAuthorById = async (req, res) => {
    try {
        const { authorId } = req.params;
        const author = await authorModel.findById(authorId);
        if (!author) {
            return res.status(404).json({
                message: "Author not found by this ID",
            });
        }
        return res.status(200).json({
            message: "Author fetched successfully by ID",
            author,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};


export const addAuthor = async (req, res) => {
    try {
        const newAuthor = new authorModel(req.body);
        await newAuthor.save();
        return res.status(201).json({
            message: "New author added successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};


export const updateAuthor = async (req, res) => {
    try {
        const { authorId } = req.params;
        const { name, bio, birthdate, nationality } = req.body;

        const author = await authorModel.findById(authorId);
        if (!author) {
            return res.status(404).json({
                message: "Author not found by this ID",
            });
        }

        author.name = name || author.name;
        author.bio = bio || author.bio;
        author.birthdate = birthdate || author.birthdate;
        author.nationality = nationality || author.nationality;

        await author.save();
        return res.status(200).json({
            message: "Author updated successfully",
            author,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const deleteAuthorById = async (req, res) => {
    try {
        const { authorId } = req.params;
        const author = await authorModel.findByIdAndDelete(authorId);
        if (!author) {
            return res.status(404).json({
                message: "Author not found by this ID",
            });
        }
        return res.status(200).json({
            message: "Author deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
