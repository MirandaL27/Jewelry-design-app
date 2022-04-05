const { Schema, model } = require('mongoose');

const Color = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        hex: {
            type: String,
            required: true,
            trim: true
        },
        rgb: {
            type: [Number, Number, Number],
        }
    }

)

module.exports = Color;