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

export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            message: "Successfully retrieve all user",
            data: users,
        })
        
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const { firstname, lastname, email} = req.body;

        const user = await User.findById(req.params.id);

        if(!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        user.firstname = firstname || user.firstname;
        user.lastname = lastname || user.lastname;
        user.email = email || user.email;

        const updatedUser = await user.save();

        res.status(200).json({
            success: true,
            message: "Updated user successfully",
            data: updatedUser,
        });
        
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        await user.deleteOne();

        res.status(200).json({
            success: true,
            message: "Deleted user successfully",
            data: user,
        })
        
    } catch (error) {
        next(error);
    }
}