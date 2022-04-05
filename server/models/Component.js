const { Schema, model } = require('mongoose');

const ComponentSchema = new Schema(
    {
        
    }

)

const Component = model('InspirationalImage', ComponentSchema);

module.exports = Component;