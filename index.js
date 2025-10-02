require("dotenv").config();

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("SHEETAL SHARMA.... LNMIIT@CSE")
});

app.listen(process.env.PORT, (req, res)=>{
    console.log(`Hello Sheetal Sharma ${process.env.PORT}`)
});
