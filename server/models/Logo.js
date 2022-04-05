const { Schema, model } = require('mongoose');

const LogoSchema = new Schema(
    {
        logoName: {
            type: String,
            required: true,
            trim: true
        },
        link: {
            type: String,
            required: true,
            trim: true
        },
        color1: {
            type: Schema.Types.ObjectId,
            ref: 'Color'
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
        }
    }

)
const Logo = model('InspirationalImage', LogoSchema);

module.exports = Logo;