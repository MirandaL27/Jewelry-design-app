const { Schema, model } = require('mongoose');

const ColorSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
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

const Color = model('Color', ColorSchema);

module.exports = Color;