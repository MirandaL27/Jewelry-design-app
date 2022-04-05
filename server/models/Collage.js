const { Schema, model } = require('mongoose');





const Collage = new Schema(
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

module.exports = Collage;