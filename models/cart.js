const mongoose = require("mongoose");


let cartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    category:{
       type:String,
       required:true
    },
    subCatCompany:{
       type:String,
       required:true
    }
});

let Cart = new mongoose.model("Cart",cartSchema);

module.exports = Cart;