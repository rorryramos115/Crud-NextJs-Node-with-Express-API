import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "User firstname is required"],
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    lastname: {
        type: String,
        required: [true, "User lastname is required"],
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true,
        trim: true,
        lowarcase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;