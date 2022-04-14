const { Schema, model } = require('mongoose');

const StoneSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
            trim: true
        },
        pricePerCarat: {
            type: String
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }

)
const Stone = model('Stone', StoneSchema);
module.exports = Stone;