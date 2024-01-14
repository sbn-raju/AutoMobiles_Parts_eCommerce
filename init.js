const mongoose = require("mongoose");
const Cart = require("./models/cart");
const Customer = require("./models/customer");


main().then((result)=>{
   console.log("Connected to database");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Parts");
}


// let cartData = [
//     {
//        name:"Chain socket",
//        company:"Hero",
//        category:"Bike",
//        subCatCompany:"Hero Geniune Parts"   
//     },
//     {
//         name:"Spark plug",
//         company:"Hero",
//         category:"Bike",
//         subCatCompany:"Hero Geniune Parts"   
//     },
//     {
//         name:"Engine Oil",
//         company:"Carsteol",
//         category:"Car",
//         subCatCompany:"Carsteol"   
//     },

// ];
let customerData = [
    {
       firstName:"Raju",
       lastName:"Simhardri",
       email:"raju@gmail.com",
       phone:9030974154,
       state:"Andhra Pradesh",
       city:"Hyderbad",
       address:"1012 gali",
       zip:500096 
    },
    {
        firstName:"Hari",
        lastName:"Priya",
        email:"priya@gmail.com",
        phone:9030974154,
        state:"Telangana",
        city:"Hyderbad",
        address:"1014 gali",
        zip:500099 
     }

]

// Cart.insertMany(cartData).then((result)=>{
//     console.log("Data Inserted");
// }).catch((err)=>{
//     console.log(err);
// })
Customer.insertMany(customerData).then((result)=>{
    console.log("data inserted");
}).catch((err)=>{
    console.log(err);
})