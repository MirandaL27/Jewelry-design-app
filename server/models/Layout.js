const { Schema, model } = require('mongoose');
//TODO: finish this schema! 
const LayoutSchema = new Schema(
    {
        layoutType: {
            type: String,
            required: true
        }
    }

)

const Layout = model('InspirationalImage', LayoutSchema);

module.exports = Layout;