import { Router } from "express";
import { createLoan, getAllLoans, markLoanAsReturned, updateLoan } from "../controllers/loanCOntroller.js";


const loanRouter = Router();
loanRouter.get("/", getAllLoans);
loanRouter.post("/addloan", createLoan);
loanRouter.put("/update/:id", updateLoan);
loanRouter.delete("/:id/return", markLoanAsReturned);

export default loanRouter;
