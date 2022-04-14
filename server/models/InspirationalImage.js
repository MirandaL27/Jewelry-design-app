const { Schema, model } = require('mongoose');

const InspirationalImageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        imageLink: {
            type: String,
            required: true,
            trim: true
        },
        style: {
            type: Schema.Types.ObjectId,
            ref: 'Style',
        },
        artist: {
            type: String,
        },
        accountName: {
            type: String
        },
        type: {
            type: Schema.Types.ObjectId,
            ref: 'JewelryType',
            required: true
        },
        price: {
            type: Number
        },
        likeRating: {
            type: Number,
            required: true
        },
        colors: [{
            type: Schema.Types.ObjectId,
            ref: 'Color'
        }],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        etsyShop: {
            type: Schema.Types.ObjectId,
            ref: "Shop"
        },
        sold: {
            type: Boolean
        },
        bestSeller: {
            type: Boolean
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
          },
        
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);


const InspirationalImage = model('InspirationalImage', InspirationalImageSchema);

module.exports = InspirationalImage;