const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Customer = require("./models/customer");
const Cart = require("./models/cart");
const Feedback = require("./models/feedback");
const Item = require("./models/items");
const path = require("path");
const { error } = require("console");


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
    let items = await Item.find({});
    res.render("shop.ejs",{items});
});

app.get("/shop/details/:id",async(req,res)=>{
    try {
    let id = new ObjectID(req.params.id);
    console.log(id);
    let data = await Item.findById(id);
    console.log(data._id);
    res.render("details.ejs",{data});
    } catch (error) {
        console.log(error)
    }
   
});

app.get("/cart/:id", async (req,res)=>{
    let {id} = req.params;
    let itemIntoCart =  await Item.findById(id);
    console.log(itemIntoCart);
    let cartData = new Cart({
        item_pic : itemIntoCart.item_pic,
        item_name : itemIntoCart.item_name,
        item_company : itemIntoCart.item_company,
        item_category :itemIntoCart.item_category,
        item_price :itemIntoCart.item_price,
        item_discount :itemIntoCart.item_discount,
        item_rating:itemIntoCart.item_rating,
        item_des : itemIntoCart.item_des
    });
    itemIntoCart = [];
    await cartData.save();
});

app.get("/cart",async (req,res)=>{
       let cartAddedData = await Cart.find();
       res.render("cart.ejs",{cartAddedData});
});


app.get("/cart/remove/:id",async(req,res)=>{
    let{id} = req.params;
    let itemFromCart = await Cart.findByIdAndDelete(id);
    console.log(itemFromCart);
    res.redirect("/cart");
});

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

app.get("/admin",(req,res)=>{
    res.render("adminPanel.ejs");
});
app.post("/admin/auth",(req,res)=>{
    let{adminUserName, adminPassward} = req.body;
    if(adminUserName === "spareUser@123" && adminPassward === "sparePass@123"){
        res.render("adminPanelPage.ejs");
    }
    else{
        res.send("Check Your Admin Passward or Username");
    };
});
app.post("/admin/ops",async(req,res)=>{
    let {ops} = req.body;
    let readItemData = await Item.find();
    if(ops == "Create"){
        res.render("adminPanelCreate.ejs");
    }
    else if(ops == "Read"){
        res.render("adminpanelRead.ejs",{readItemData});
    }
    else if(ops == "Delete"){
        res.render("adminPanelDelete.ejs",{readItemData});
    }
    else if(ops == "Update"){
        res.render("adminPanelUpdate.ejs");
    }
});
app.post("/admin/create",async(req,res)=>{
    let {item_pic,item_name,item_company ,item_category,item_price,item_discount,item_rating,item_des} = req.body;
    let newItemData = new Item({
        item_pic :item_pic,
        item_name : item_name,
        item_company : item_company,
        item_category : item_category,
        item_price : item_price,
        item_discount :item_discount,
        item_rating:item_rating,
        item_des : item_des
    });
    await newItemData.save();
});

