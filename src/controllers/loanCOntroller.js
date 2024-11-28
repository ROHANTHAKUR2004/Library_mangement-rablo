import loanModel from "../models/loan.model.js";


export const getAllLoans = async (req, res) => {
    try {
        const loans = await loanModel.find({});
        return res.status(200).json({
            message: "All loans fetched successfully",
            loans,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


export const createLoan = async (req, res) => {
    try {
        const newLoan = new loanModel(req.body);
        await newLoan.save();
        return res.status(201).json({
            message: "New loan created successfully",
            loan: newLoan,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


export const updateLoan = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await loanModel.findById(id);

        if (!loan) {
            return res.status(404).json({
                message: "Loan not found by this ID",
            });
        }

        Object.assign(loan, req.body); 
        await loan.save();

        return res.status(200).json({
            message: "Loan updated successfully",
            loan,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


export const markLoanAsReturned = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await loanModel.findByIdAndUpdate(
            id,
            { status: "returned" },
            { new: true }
        );

        if (!loan) {
            return res.status(404).json({
                message: "Loan not found by this ID",
            });
        }

        return res.status(200).json({
            message: "Loan marked as returned",
            loan,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};
