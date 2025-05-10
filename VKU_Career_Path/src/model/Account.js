const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: Number,
        required: true,
        enum: [0, 1],
        default: 0
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Account', accountSchema);