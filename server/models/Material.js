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
        }
    }

)
const Material = model('Material', MaterialSchema);

module.exports = Material;