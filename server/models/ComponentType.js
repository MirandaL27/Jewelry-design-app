const { Schema, model } = require('mongoose');

const ComponentTypeSchema = new Schema(
    {
        componentType: {
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

const ComponentType = model('ComponentType', ComponentTypeSchema);

module.exports = ComponentType;