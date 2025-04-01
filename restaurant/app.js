import express from "express";
import { Restaurant } from "./restaurant.model.js";
import connectDB from "./db.js";
const port =3002;
const app = express();
app.use(express.json());
connectDB();

app.post("/create", async(req,res)=> {
    const {name,phoneNo, location} = req.body;

    if (!name || !phoneNo || !location) {
        res.status(400).send("kindly provide all info")
    }

    const newRestaurant = new Restaurant({
        name,
        phoneNo,
        location,
    })

    newRestaurant.save();
    res.status(200).send("restaurant created")
});


app.get("/retreive/:id", async(req,res)=> {
    const {id} = req.params;

   const findRestaurant = await Restaurant.find({_id: id})
   if (!findRestaurant) {
    res.status(400).send("restaurant not found")
   }


    res.status(200).send(findRestaurant);

    
});

app.get("/retreive/restaurants", async(req,res)=> {

   const restaurant = await Restaurant.find()
   if (!restaurant) {
    res.status(400).send("no restaurant found")
   }


    res.status(200).send(restaurant);

    
});


app.listen(port,()=>{
    console.log(`your app is running on port ${port}`)
})
