import express from "express";
import { Customer } from "./customer.model.js";
import connectDB from "./db.js";
const port =3000;
const app = express();
app.use(express.json());

connectDB();

app.post("/customer/create", async(req,res)=>{
     const {name, preference, phoneNo} = req.body;
    
        if (!name || !phoneNo || !preference) {
            res.status(400).send("kindly provide all info")
        }
    
        const newCustomer = new Customer({
            name,
            preference,
            phoneNo,
            
        })
    
        newCustomer.save();
        res.status(200).send("customer created")
})


app.get("/customer/retreive/:id", async(req,res)=> {
    const {id} = req.params;

   const findCustomer = await Customer.find({_id: id})
   if (!findCustomer) {
    res.status(400).send("customer not found")
   }


    res.status(200).send(findCustomer);

    
});





app.listen(port,()=>{
    console.log(`your app is running on port ${port}`)
})
