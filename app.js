const express = require("express");
const app = express();

const fs = require("fs");

// Host and Port
const Port = 80;
const Host = "127.0.0.1";

app.get("/" , (req , res)=>{
    res.status(200).send("This Is Home Page")
})
app.get("/Services" , (req , res)=>{
    res.status(200).send("This Is Services Page")
})
app.get("/About" , (req , res)=>{
    res.status(200).send("This Is Abouts Page")
})
app.get("/Contant" , (req , res)=>{
    res.status(200).send("This Is Contant Page")
})

// server Online Code
app.listen(Port , ()=>{
    console.log(`Server is Starting at http://${Host}:${Port}`)
})