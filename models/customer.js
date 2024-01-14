const mongoose = require("mongoose");


let customerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    }
});

let Customer = new mongoose.model("Customer",customerSchema);


module.exports = Customer;