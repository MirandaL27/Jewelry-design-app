const { Schema, model } = require('mongoose');

const ShapeSchema = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        }
    }

)

const Shape = model('InspirationalImage', ShapeSchema);
module.exports = Shape;