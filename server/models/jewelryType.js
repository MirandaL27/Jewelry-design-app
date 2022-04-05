const { Schema, model } = require('mongoose');

const JewelryType = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        }
    }

)

module.exports = JewelryType;