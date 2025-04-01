import mongoose from "mongoose";
const customerSchema = new mongoose.Schema(
{
    name: {
        type: String,
      },

      preference: {
        type: String,
      },

      phoneNo: {
        type: String,
      }
  
}


);

export const Customer = mongoose.model("Customer", customerSchema);