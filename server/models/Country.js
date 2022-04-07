const { Schema, model } = require('mongoose');

const CountrySchema = new Schema(
    {
        countryName: {
            type: String,
            required: true,
            trim: true
        }
    }

)

const Country = model('Country', CountrySchema);

module.exports = Country;