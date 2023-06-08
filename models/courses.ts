import { Schema, model, models } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        unique: [true, "Title already exists!"],
        required: [true, "Title is required!"],
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        default: null,
    },
    livePrice: {
        type: Number,
        required: [true, "Price is required!"],
        default: 0,
    },
    onDemandPrice: {
        type: Number,
        default: 0,
    },
    isLive: {
        type: Boolean,
        default: true,
    },
    isOnDemand: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        default: null,
    },
    duration: {
        type: String,
        default: null,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

const Course = models.Course || model("Course", courseSchema);

export default Course;
