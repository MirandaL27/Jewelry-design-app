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
const Material = model('InspirationalImage', MaterialSchema);

module.exports = Material;