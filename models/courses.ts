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
    },
    livePrice: {
        type: Number,
        required: [true, "Price is required!"],
    },
    image: {
        type: String,
        required: [true, "Image is required!"],
    },
    onDemandPrice: {
        type: Number,
        default: 0,
    },
    onSale: {
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
    isActive: {
        type: Boolean,
        default: true,
    },
    duration: {
        type: String,
        default: null,
    },
});

const Course = models.Course || model("Course", courseSchema);

export default Course;
