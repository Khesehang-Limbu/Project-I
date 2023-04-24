const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./db/dbConnect");
const Student = require("./db/studentModel");


const app = express();
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});

app.get("/", function(req, res, next){
    res.json({message: "This is from the server."});
    next();
});

app.post("/login", function(req, res){
    Student.findOne({email : req.body.email})
    .then((user)=>{
        console.log(user);
    })
    .catch(error => {
        res.status(404).send({
            message : "Email Not Found!",
            error
        });
    })
});


module.exports = app;