const { Schema, model } = require('mongoose');

const DesignSchema = new Schema(
    {
        _id: {
           type: ID,
           required: true
        },
        designName: {
            type: String,
            required: true,
            trim: true
        },
        components: [
            {
                type: Schema.Types.ObjectId,
                ref: "Component",
                required: true
            }
        ],
        jewelryType: {
            type: Schema.Types.ObjectId,
            ref: 'JewelryType'
        },
        likeRating: {
            type: Number,
            required: true
        },
        colors: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Color'
            }
        ],
        style: {
            type: Schema.Types.ObjectId,
            ref: 'Style'
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }

)

DesignSchema.virtual("TotalPrice").get(function() {
    let totalPrice = 0;
    this.components.forEach(component => {
        totalPrice += component.price;
    });
    return totalPrice;
});

DesignSchema.virtual("TotalShippingPrice").get(function() {
    let totalPrice = 0;
    this.components.forEach(component => {
        totalPrice += component.shippingPrice;
    });
    return totalPrice
});

DesignSchema.virtual("TotalMaxPrice").get(function() {
    let totalPrice = 0;
    this.components.forEach(component => {
        totalPrice += component.maxPrice;
    });
    return totalPrice;
});

DesignSchema.virtual("totalQuantity").get(function() {
    let minQuantity = Number.MAX_SAFE_INTEGER;
    this.components.forEach(component => {
        if(component.quantity < minQuantity){
            minQuantity = component.quantity;
        }
    });
    if(this.jewelryType === "Earrings"){
        minQuantity = minQuantity/2;
    }
    return minQuantity;
});

DesignSchema.virtual("totalMaxQuantity").get(function() {
    let minQuantity = Number.MAX_SAFE_INTEGER;
    this.components.forEach(component => {
        if(component.maxQuantity < minQuantity){
            minQuantity = component.maxQuantity;
        }
    });
    if(this.jewelryType === "Earrings"){
        minQuantity = minQuantity/2;
    }
    return minQuantity;
});

DesignSchema.virtual("soldOut").get(function() {
    let soldOut = false;
    this.components.forEach(component => {
        if(component.soldOut){
            soldOut = true;
        }
    });
    return soldOut;
});

const Design = model('Design', DesignSchema);

module.exports = Design;