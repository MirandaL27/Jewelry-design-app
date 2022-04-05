const { Schema, model } = require('mongoose');

const InspirationalImage = new Schema(
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
            type: String,
        },
        artist: {
            type: String,
        },
        accountName: {
            type: String
        },
        Type: {
            type: Schema.Types.ObjectId,
            ref: 'jewelryType',
            required: true
        },
        price: {
            type: Number
        },
        rating: {
            type: Number,
            required: true
        },
        color1: {
            type: String
        },
        color2: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        color3: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        color4: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        color5: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        color6: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        color7: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        color8: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        color9: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        color10: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        etsyShop: {
            type: Schema.Types.ObjectId,
            ref: "Shop"
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


const User = model('User', userSchema);

module.exports = User;