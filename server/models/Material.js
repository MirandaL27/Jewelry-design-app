const { Schema, model } = require('mongoose');

const MaterialSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true
        },
        pricePerOunce: {
            type: Number,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }

)
const Material = model('Material', MaterialSchema);

module.exports = Material;