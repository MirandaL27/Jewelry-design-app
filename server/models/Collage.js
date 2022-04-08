const { Schema, model } = require('mongoose');


const CollageSchema = new Schema(
    {
        collageName: {
            type: String,
            required: true,
            trim: true
        },
        collageLayout: {
            type: Schema.Types.ObjectId,
            ref: "Layout"
        },
        roundedCorners: {
            type: Boolean,
            default: false
        },
        circularPhotos: {
            type: Boolean,
            default: false
        },
        padding: {
            type: Boolean,
            default: false
        },
        paddingThickness: {
            type: Number
        },
        border: {
            type: Boolean,
            default: false
        },
        borderThickness: {
            type: Number
        },
        borderColor: {
            type: String
        },
        shadow: {
            type: Boolean
        },
        shadowColor:{
            type: String
        },
        shadowOpacity: {
            type: String
        },
        captions: {
            type: Boolean
        },
        title: {
            type: Boolean
        },
        font: {
            type: String
        },
        backgroundColor: {
            type: String
        },
        images: [
            {
                type: Schema.Types.ObjectId,
                ref: "InspirationalImage"
            }
        ],
        imagePositions: [],
        imageCaptions: [],
        titleText: {
            type: String
        }

    }

)
const Collage = model('Collage', CollageSchema);

module.exports = Collage;