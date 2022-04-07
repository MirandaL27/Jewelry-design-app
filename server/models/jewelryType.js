const { Schema, model } = require('mongoose');

const JewelryTypeSchema = new Schema(
    {
        jewelryType: {
            type: String,
            required: true,
            trim: true
        }
    }

)

const JewelryType = model('InspirationalImage', JewelryTypeSchema);

module.exports = JewelryType;