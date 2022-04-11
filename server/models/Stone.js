const { Schema, model } = require('mongoose');

const StoneSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true
        },
        pricePerOunce: {
            type: Number
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }

)
const Stone = model('Stone', StoneSchema);
module.exports = Stone;