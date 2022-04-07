const { Schema, model } = require('mongoose');
//TODO: finish this schema! 
const LayoutSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        cell1: {
            type: Number,
            required: true
        },
        cell2: {
            type: Number,
            required: true
        },
        cell3: {
            type: Number,
            required: true
        },
        cell4: {
            type: Number,
            required: true
        },
        cell5: {
            type: Number,
            required: true
        },
        cell6: {
            type: Number,
            required: true
        },
        cell7: {
            type: Number,
            required: true
        },
        cell8: {
            type: Number,
            required: true
        },
        cell9: {
            type: Number,
            required: true
        },
        cell10: {
            type: Number,
            required: true
        },
        cell11: {
            type: Number,
            required: true
        },
        cell12: {
            type: Number,
            required: true
        },
        cell13: {
            type: Number,
            required: true
        },
        cell14: {
            type: Number,
            required: true
        },
        cell15: {
            type: Number,
            required: true
        },
        cell16: {
            type: Number,
            required: true
        },
        cell17: {
            type: Number,
            required: true
        },
        cell18: {
            type: Number,
            required: true
        },
        cell19: {
            type: Number,
            required: true
        },
        cell20: {
            type: Number,
            required: true
        },
        cell21: {
            type: Number,
            required: true
        },
        cell22: {
            type: Number,
            required: true
        },
        cell23: {
            type: Number,
            required: true
        },
        cell24: {
            type: Number,
            required: true
        },
        cell25: {
            type: Number,
            required: true
        },
        cell26: {
            type: Number,
            required: true
        },
        cell27: {
            type: Number,
            required: true
        },
        cell28: {
            type: Number,
            required: true
        },
        cell29: {
            type: Number,
            required: true
        },
        cell30: {
            type: Number,
            required: true
        },
        cell31: {
            type: Number,
            required: true
        },
        cell32: {
            type: Number,
            required: true
        },
        cell33: {
            type: Number,
            required: true
        },
        cell34: {
            type: Number,
            required: true
        },
        cell35: {
            type: Number,
            required: true
        },
        cell36: {
            type: Number,
            required: true
        }
    }

)

const Layout = model('InspirationalImage', LayoutSchema);

module.exports = Layout;