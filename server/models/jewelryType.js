const { Schema, model } = require('mongoose');

const JewelryTypeSchema = new Schema(
    {
        jewelryType: {
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

const JewelryType = model('JewelryType', JewelryTypeSchema);

module.exports = JewelryType;