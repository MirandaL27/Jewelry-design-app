const { Schema, model } = require('mongoose');
//TODO: finish this schema! 
const ShopSchema = new Schema(
    {
        shopName: {
            type: String,
            required: true,
            trim: true
        },
        ownerName: {
            type: String,
            trim: true
        },
        shopRating: {
            type: Number
        },
        link: {
            type: String
        },
        numberOfSales: {
            type: Number
        },
        updatedAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    }

)

const Shop = model('InspirationalImage', ShopSchema);
module.exports = Shop;