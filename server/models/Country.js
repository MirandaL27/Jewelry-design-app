const { Schema, model } = require('mongoose');

const CountrySchema = new Schema(
    {
        countryName: {
            type: String,
            required: true,
            trim: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }

)

const Country = model('Country', CountrySchema);

module.exports = Country;