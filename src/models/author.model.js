import { Schema, model } from 'mongoose';

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    bio: {
        type: String,
        required: false,
        trim: true,
    },
    birthdate: {
        type: Date,
        required: false,
    },
    nationality: {
        type: String,
        required: false,
    },
}, {
    timestamps: true, 
});

const Author = model('Author', authorSchema);

export default Author;
