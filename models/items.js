const mongoose = require("mongoose");


let itemSchema = new mongoose.Schema({
    item_pic:{
        type:String,
        required:true
    },
    item_name:{
        type:String,
        required:true
    },
    item_company:{
        type:String,
        required:true
    },
    item_category:{
        type:String,
        required:true
    },
    item_price:{
        type:Number,
        required:true
    },
    item_discount:{
        type:Number,
        required:true
    },
    item_rating:{
        type:String,
    },
    item_des:{
        type:String,
        minLength:10,
        required:true
    }
});

let Item = new mongoose.model("Item",itemSchema);


module.exports = Item;