import User from "../models/user.model.js";

export const createUser = async (req, res, next) => {
    try {
        const { firstname, lastname, email } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        const newUser = await User.create({
            firstname,
            lastname,
            email,
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser,
        })
        
    } catch (error) {
        next(error);
    }
}