const { Schema, model } = require('mongoose');

const Stone = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        },
        pricePerOunce: {
            type: Number
        }
    }

)

module.exports = JewelryType;