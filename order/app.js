import express from "express";
import { Order } from "./order.model.js";
import connectDB from "./db.js";
const port =3001;
const app = express();
app.use(express.json());
connectDB();

app.post("/order/create", async(req,res)=>{
    const {restaurantId, customerId, title} = req.body;
    
    if (!restaurantId || !customerId || !title) {
        return res.status(400).send("kindly provide all info")
    }

    const restaurant = await fetch(`http://localhost:3002/retreive/${restaurantId}`);
    const customer = await fetch(`http://localhost:3000/customer/retreive/${customerId}`);

    const response1 = await restaurant.json();
    const response2 = await customer.json();

    /*if(response1.status != 200) {
       return res.status(404).send("Restaurant not found!");
    }

    if(response2.status != 200) {
        return res.status(404).send("Customer not found!");
    }*/

    const newOrder = new Order({
        restaurantId, customerId, title
    })

    newOrder.save();
    res.status(200).send("order placed")
})

app.get("/order/history", async(req,res)=> {

   const findOrder = await Order.find()
   if (!findOrder) {
    res.status(400).send("orders not found")
   }


    res.status(200).send(findOrder);

    
});

app.listen(port,()=>{
    console.log(`your app is running on port ${port}`)
})
