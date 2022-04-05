const { Schema, model } = require('mongoose');

const ShopSchema = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        }
    }

)

const Shop = model('InspirationalImage', ShopSchema);
module.exports = Shop;