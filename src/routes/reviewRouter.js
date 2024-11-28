import { Router } from "express";
import {
    getBookReviews,
    addReview,
    updateReview,
    deleteReview,
} from "../controllers/reviewController.js";

const reviewRouter = Router();
reviewRouter.get("/books/:id/reviews", getBookReviews);
reviewRouter.post("/books/:id/reviews", addReview);
reviewRouter.put("/books/:id/reviews/:reviewId", updateReview);
reviewRouter.delete("/books/:id/reviews/:reviewId", deleteReview);

export default reviewRouter;
