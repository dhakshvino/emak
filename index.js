const express = require("express");
const { dirname } = require("path");
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/partials/home.html");
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/partials/about.html");
})
app.listen(3000, ()=>{
    console.log("Server started...");
})