const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    email : {
        type: String,
        required : [true, "Please provide an email"],
        unique : [true, "Email Already Exists"]
    },
    password : {
        type : String,
        required : [true, "Please provide a password"],
        unique : false
    }
});


module.exports = mongoose.model.Students || mongoose.model("Students", studentSchema);


