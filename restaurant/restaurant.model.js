import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            trim: true,
          },
    
          location: {
            type: String,
          },
    
          phoneNo: {
            type: String,
          }
      
    }

);

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);