import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
    },
});

const Counter = mongoose.model('Counter', counterSchema);

export default Counter;