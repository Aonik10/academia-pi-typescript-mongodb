import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        required: [true, "Email is required!"],
    },
    password: {
        type: String,
        default: null,
    },
    firstName: {
        type: String,
        default: "Alumno",
    },
    lastName: {
        type: String,
        default: null,
    },
    image: {
        type: String,
        default: "https://iili.io/H4uyVZF.webp",
    },
    inscriptions: {
        type: [String],
        default: null,
    },
    reffersCodes: {
        type: [String],
        default: null,
    },
});

const User = models.User || model("User", UserSchema); // Look into the model User, if it is there, if not, create a new model

export default User;
