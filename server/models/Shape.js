const { Schema, model } = require('mongoose');

const Shape = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        }
    }

)

module.exports = Shape;