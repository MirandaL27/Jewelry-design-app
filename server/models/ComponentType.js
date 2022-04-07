const { Schema, model } = require('mongoose');

const ComponentTypeSchema = new Schema(
    {
        componentType: {
            type: String,
            required: true,
            trim: true
        }
    }

)

const ComponentType = model('ComponentType', ComponentTypeSchema);

module.exports = ComponentType;