const { Schema, model } = require('mongoose');

const ColorSchema = new Schema(
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

const Color = model('InspirationalImage', ColorSchema);

module.exports = Color;