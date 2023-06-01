import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        required: [true, "Email is required!"],
    },
    password: {
        type: String,
        required: [true, "Username is required!"],
    },
    image: {
        type: String,
    },
});

const User = models.User || model("User", UserSchema); // Look into the model User, if it is there, if not, create a new model

export default User;
