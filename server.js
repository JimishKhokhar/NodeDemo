const express = require("express");
const app = express();
require("dotenv").config();

app.get('/',(req,res)=>{
    res.send("Running...");
})

app.listen(process.env.PORT || 3000, (err) => {
    if (err)
        console.log(err);
    console.log(`Server Running on Port ${process.env.PORT}`)
})