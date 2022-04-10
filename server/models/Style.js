const { Schema, model } = require('mongoose');

const StyleSchema = new Schema(
    {
        _id: {
            type: ID,
            required: true
        },
        type: {
            type: String,
            required: true,
            trim: true
        },
        background: {
            type: String,
            trim: true
        },
        styleElements: {
            type: String,
            trim: true
        },
        timePeriod: {
            type: String,
            trim: true
        },
        notes: {
            type: String,
            trim: true
        }
    }

)
const Style = model('Style', StyleSchema);
module.exports = Style;