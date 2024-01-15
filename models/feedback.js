const mongoose = require("mongoose");


let feedbackSchema = new mongoose.Schema({
    profile:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        require:true
    },
    stars:{
        type:Number,
        require:true
    }
});

let Feedback = new mongoose.model("Feedback",feedbackSchema);


module.exports = Feedback;