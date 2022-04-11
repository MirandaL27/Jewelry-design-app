const { Schema, model } = require('mongoose');

const ShapeSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }

)

const Shape = model('Shape', ShapeSchema);
module.exports = Shape;