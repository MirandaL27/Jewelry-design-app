const { Schema, model } = require('mongoose');

const StoneSchema = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        },
        pricePerOunce: {
            type: Number
        }
    }

)
const Stone = model('InspirationalImage', StoneSchema);
module.exports = Stone;