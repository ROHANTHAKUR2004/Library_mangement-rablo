import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import connectdb from "./src/config/db.js";
import bookRouter from "./src/routes/bookRoutes.js";
import authorRouter from "./src/routes/authorRouter.js";
import userRouter from "./src/routes/userRouter.js"
import loanRouter from "./src/routes/loanRouter.js";
import reviewRouter from "./src/routes/reviewRouter.js";
dotenv.config({
    path: "./.env",
});

const app = express();

connectdb();

app.use(json());


const corsOptions = {
    origin: "http://localhost:3000", 
    credentials: true, 
};
app.use(cors(corsOptions));



app.use('/books',bookRouter);
app.use('/authors', authorRouter);
app.use('/users', userRouter);
app.use('/loan', loanRouter);
app.use('/review', reviewRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
