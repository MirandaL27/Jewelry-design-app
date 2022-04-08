const { Schema, model } = require('mongoose');

const ShapeSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true
        }
    }

)

const Shape = model('Shape', ShapeSchema);
module.exports = Shape;