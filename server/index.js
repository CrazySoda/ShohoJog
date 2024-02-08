require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//middle-ware
app.use(cors());
app.use(express.json());//req.body


//Routes

//Register and Login Routes
app.use("/auth", require("./routes/jwtAuth"));


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});