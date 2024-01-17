const express =require("express")
const app=express();
const mongoose=require("mongoose")
const dotenv= require("dotenv")
const userRoute= require("./routes/user")
const bodyParser = require("body-parser");


dotenv.config();

// Use body-parser middleware to parse JSON
app.use(bodyParser.json());


app.use("/api/users",userRoute)

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("db connection sucessful"))
.catch((eer)=>{
    console.log(err);
})




// mongodb+srv://johnmuc:57370101@cluster0.efqhgjj.mongodb.net/
app.listen(5000,(()=>{
  console.log("backed server is rinnig ")
}))