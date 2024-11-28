import Review from "../models/review.model.js";
import Book from "../models/book.model.js";


export const getBookReviews = async (req, res) => {
    try {
        const { id } = req.params;
        const reviews = await Review.find({ bookId: id }).populate("userId", "name email");
        
        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: "No reviews found for this book" });
        }

        return res.status(200).json({
            message: "Reviews fetched successfully",
            reviews,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const addReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, rating, reviewText } = req.body;

        const newReview = new Review({
            userId,
            bookId: id,
            rating,
            reviewText,
        });

        await newReview.save();

     
        const book = await Book.findById(id);
        if (book) {
            book.averageRating = await calculateAverageRating(id);
            await book.save();
        }

        return res.status(201).json({
            message: "Review added successfully",
            review: newReview,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


export const updateReview = async (req, res) => {
    try {
        const { id, reviewId } = req.params;
        const { rating, reviewText } = req.body;

        const review = await Review.findOne({ _id: reviewId, bookId: id });

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        review.rating = rating || review.rating;
        review.reviewText = reviewText || review.reviewText;

        await review.save();

        return res.status(200).json({
            message: "Review updated successfully",
            review,
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const { id, reviewId } = req.params;
        const review = await Review.findOneAndDelete({ _id: reviewId, bookId: id });

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

     
        const book = await Book.findById(id);
        if (book) {
            book.averageRating = await calculateAverageRating(id);
            await book.save();
        }

        return res.status(200).json({
            message: "Review deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const calculateAverageRating = async (bookId) => {
    const reviews = await Review.find({ bookId });
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
};
