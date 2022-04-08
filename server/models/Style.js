const { Schema, model } = require('mongoose');

const StyleSchema = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        },
        Background: {
            type: String,
            trim: true
        },
        StyleElements: {
            type: String,
            trim: true
        },
        TimePeriod: {
            type: String,
            trim: true
        },
        Notes: {
            type: String,
            trim: true
        }
    }

)
const Style = model('Style', StyleSchema);
module.exports = Style;