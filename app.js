const express = require("express");
const app = express();

const fs = require("fs");

// Host and Port
const Port = 80;
const Host = "127.0.0.1";

// Add Componets File
const Home = fs.readFileSync("Componets/Home.html" , "utf-8");
const Services = fs.readFileSync("Componets/Services.html" , "utf-8");
const Abouts = fs.readFileSync("Componets/Abouts.html" , "utf-8");
const Contant = fs.readFileSync("Componets/Contant.html" , "utf-8");

app.get("/" , (req , res)=>{
    res.status(200).send(Home)
})
app.get("/Services" , (req , res)=>{
    res.status(200).send(Services)
})
app.get("/About" , (req , res)=>{
    res.status(200).send(Abouts)
})
app.get("/Contant" , (req , res)=>{
    res.status(200).send(Contant)
})

// server Online Code
app.listen(Port , ()=>{
    console.log(`Server is Starting at http://${Host}:${Port}`)
})