import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(

    {
        customerId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true
        },

        restaurantId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurant",
            required: true
        },

        title: {
            type:String
        }
    
      
    }

);

export const Order = mongoose.model("Order", orderSchema);