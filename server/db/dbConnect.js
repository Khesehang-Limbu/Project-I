const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(){
    mongoose.connect("mongodb+srv://khesehang81:evilking123@cluster0.fdjc1fh.mongodb.net/sbsDB?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connection Made Successfully");
    })
    .catch(error => {
        error = new Error();
    })
}

module.exports = dbConnect;
