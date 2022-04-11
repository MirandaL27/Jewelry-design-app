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
        colors: [{
            type: Schema.Types.ObjectId,
            ref: 'Color'
        }],
    }

)
const Logo = model('Logo', LogoSchema);

module.exports = Logo;