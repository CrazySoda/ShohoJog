const express = require("express");
const app = express();
const cors = require("cors");


//middle-ware
app.use(cors());
app.use(express.json());//req.body


//Routes

//Register and Login Routes
app.use("/auth", require("./routes/jwtAuth"));



app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});