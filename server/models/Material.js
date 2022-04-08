const { Schema, model } = require('mongoose');

const MaterialSchema = new Schema(
    {
        Type: {
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