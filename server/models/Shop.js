const { Schema, model } = require('mongoose'); 
const ShopSchema = new Schema(
    {
        _id: {
            type: ID,
            required: true
        },
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

const Shop = model('Shop', ShopSchema);
module.exports = Shop;