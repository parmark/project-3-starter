const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    Name: {
        type:String, 
        trim:true
    }
}) 

let Form = mongoose.model("Form", FormSchema)

module.exports = Form
