    const express = require("express");
    const app = express();
    const mongoose = require("mongoose");
    const Customer = require("./models/customer");
    const Cart = require("./models/cart");
    const Feedback = require("./models/feedback");
    const Item = require("./models/items");
    const path = require("path");


    app.set("view engine", "ejs");
    app.use(express.static(path.join(__dirname,"/public/css")));
    app.use(express.static(path.join(__dirname,"/public/js")));
    app.use(express.static(path.join(__dirname,"/public/images")));
    app.set("views",path.join(__dirname,"views"));
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());


    let port = 8080;

    main().then((result)=>{
        console.log("Connected to database");
    }).catch((err)=>{
        console.log(err);
    });

    async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/Parts");
    } 


    app.listen(port,()=>{
        console.log("App liesting at the port",port);
    });

    app.get("/",async(req,res)=>{
        let feedBacks = await Feedback.find({}).sort({_id:-1}).limit(3).sort({_id:-1}).limit(3);
        res.render("index.ejs",{feedBacks});
    });

    app.get("/shop", async(req,res)=>{
        let itemsData = await Item.find({})
        res.render("shop.ejs",{itemsData});
    });

    app.get("/shop/details",(req,res)=>{
        res.render("details.ejs");
    })

    app.get("/signup",(req,res)=>{
        res.render("signup.ejs");
    });


    app.post("/submit/signup",(req,res)=>{
        let{firstName, lastName, email, phone, state, city, address, zip} = req.body;
        let customerData = new Customer({
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone,
            state:state,
            city:city,
            address:address,
            zip:zip
        });
        customerData.save().then(()=>{
            res.redirect("/");
        }).catch((err)=>{
            console.log(err);
        })
    });