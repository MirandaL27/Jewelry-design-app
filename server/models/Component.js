const { Schema, model } = require('mongoose');

const ComponentSchema = new Schema(
    {
        _id: {
            type: ID,
            required: true
        },
        componentName: {
            type: String,
            required: true,
            trim: true
        },
        componentType: {
            type: Schema.Types.ObjectId,
            ref: 'ComponentType',
            required: true
        },
        style: {
            type: Schema.Types.ObjectId,
            ref: 'Style',
            required: true
        },
        material: [{
            type: Schema.Types.ObjectId,
            ref: 'Material',
        }],
        stoneType: [{
            type: Schema.Types.ObjectId,
            ref: 'Stone',
        }],
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
        quantity: {
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
        colors: [{
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

const Component = model('Component', ComponentSchema);

module.exports = Component;