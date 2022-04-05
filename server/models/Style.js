const { Schema, model } = require('mongoose');

const Style = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        }
    }

)

module.exports = Style;