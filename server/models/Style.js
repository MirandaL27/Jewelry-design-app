const { Schema, model } = require('mongoose');

const StyleSchema = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        }
    }

)
const Style = model('InspirationalImage', StyleSchema);
module.exports = Style;