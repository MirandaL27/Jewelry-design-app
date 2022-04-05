const { Schema, model } = require('mongoose');

const Material = new Schema(
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

module.exports = Material;