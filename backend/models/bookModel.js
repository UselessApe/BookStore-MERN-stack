import mongoose from "mongoose";

// create schema to use it and make sure important data is required
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timeStamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);