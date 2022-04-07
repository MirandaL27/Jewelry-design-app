const { Schema, model } = require('mongoose');

const ComponentSchema = new Schema(
    {
        componentType: {
            type: Schema.Types.ObjectId,
            ref: 'ComponentType',
            required: true
        },
        Style: {
            type: Schema.Types.ObjectId,
            ref: 'Style',
            required: true
        },
        Material: {
            type: Schema.Types.ObjectId,
            ref: 'Material',
        },
        StoneType: {
            type: Schema.Types.ObjectId,
            ref: 'Stone',
        },
        countryOfOrigin: {
            type: Schema.Types.ObjectId,
            ref: 'Country'
        },
        shape: {
            type: Schema.Types.ObjectId,
            ref: 'Shape'
        },
        size: {
            type: String,
        },
        weight: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        Quantity: {
            type: Number,
        },
        maxPrice: {
            type: Number
        },
        maxQuantity: {
            type: Number
        },
        freeShipping: {
            type: Boolean
        },
        shippingPrice: {
            type: Number
        },
        shippingTime: {
            type: String
        },
        Colors: [{
            type: Schema.Types.ObjectId,
            ref: 'Color'
        }],
        link: {
            type: String,
            required: true
        },
        photoLink: {
            type: String,
            required: true
        },
        etsyItemName: {
            type: String
        },
        shopName: {
            type: String
        },
        soldOut: {
            type: Boolean
        },
        bestSeller: {
            type: Boolean
        },
        likeRating: {
            type: Number,
            required: true
        },
    }

)

const Component = model('InspirationalImage', ComponentSchema);

module.exports = Component;