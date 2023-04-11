const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(bodyParser.urlencoded(true));

app.get("/", function(req, res){
    res.write("<h1>Hellow World</h1>");
});

app.get("/api", function(req, res){
    res.json({message: "Hello"});
});

app.post("/api/login", function(req, res){
    console.log(req.body);
});


app.listen(3030, function(req, res){
    console.log("Server Started at port 3030");
});
