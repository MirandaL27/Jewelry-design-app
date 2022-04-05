const { Schema, model } = require('mongoose');

const LayoutSchema = new Schema(
    {
        Type: {
            type: String,
            required: true,
            trim: true
        }
    }

)

const Layout = model('InspirationalImage', LayoutSchema);

module.exports = Layout;