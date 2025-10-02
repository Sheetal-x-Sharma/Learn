// require("dotenv").config();
import dotenv from "dotenv"
import express from "express";
// const express = require("express");
dotenv.config()
const app = express();

app.get('/', (req, res) => {
    res.send("SHEETAL SHARMA.... LNMIIT")
});

app.listen(process.env.PORT, (req, res)=>{
    console.log(`Hello Sheetal Sharma ${process.env.PORT}`)
});