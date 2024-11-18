import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import connectdb from "./src/config/db.js";

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




app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
