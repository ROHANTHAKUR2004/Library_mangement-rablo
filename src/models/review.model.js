import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "User",
          required: true },
    bookId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "Book", 
         required: true },
    rating: {
         type: Number,
          required: true, 
          min: 1,
           max: 5 },
    reviewText: { 
        type: String, 
        required: true },
}, { timestamps: true });

export default mongoose.model("Review", reviewSchema);
