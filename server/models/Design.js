const { Schema, model } = require('mongoose');

const DesignSchema = new Schema(
    {
        
    }

)

const Design = model('InspirationalImage', DesignSchema);

module.exports = Design;