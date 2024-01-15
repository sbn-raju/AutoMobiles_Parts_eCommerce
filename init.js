const mongoose = require("mongoose");
const Cart = require("./models/cart");
const Customer = require("./models/customer");
const Feedback = require("./models/feedback");
const Item = require("./models/items");
const itemsData = require("./shopData");

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
// let customerData = [
//     {
//        firstName:"Raju",
//        lastName:"Simhardri",
//        email:"raju@gmail.com",
//        phone:9030974154,
//        state:"Andhra Pradesh",
//        city:"Hyderbad",
//        address:"1012 gali",
//        zip:500096 
//     },
//     {
//         firstName:"Hari",
//         lastName:"Priya",
//         email:"priya@gmail.com",
//         phone:9030974154,
//         state:"Telangana",
//         city:"Hyderbad",
//         address:"1014 gali",
//         zip:500099 
//     }

// ];
// let feedbackData = [
//     {
//       profile:"https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=996&t=st=1705304241~exp=1705304841~hmac=0421607a928ac0dedfa866a294961b7ffc721a76e6c66349332c9a631ce3e61d",
//       userName:"Raju",
//       feedback:"IT was very good shopping with this platform and was very good very support",
//       stars:4
//     },
//     {
//       profile:"https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?w=996&t=st=1705304340~exp=1705304940~hmac=e5ecdef9c83830760d1a83c1d07ce7b0d762c3ed0694bcdb3418775a633d708b",
//       userName:"Gopi",
//       feedback:"IT was very good shopping with this platform and was very good very support",
//       stars:5
//     },
//     {
//         profile:"https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?w=996&t=st=1705304363~exp=1705304963~hmac=06be96fceae49db8328cbb41935e24cde4c2d39674040531f9dc07d2ac3dc44e",
//         userName:"Shiva",
//         feedback:"IT was very good shopping with this platform and was very good very support",
//         stars:3
//     },
// ]

// Cart.insertMany(cartData).then((result)=>{
//     console.log("Data Inserted");
// }).catch((err)=>{
//     console.log(err);
// })
// Customer.insertMany(customerData).then((result)=>{
//     console.log("data inserted");
// }).catch((err)=>{
//     console.log(err);
// })
// Feedback.insertMany(feedbackData).then((result)=>{
//     console.log("Data of feedback inserted");
// }).catch((err)=>{
//     consolee.log(err);
// })
// Item.insertMany(itemsData).then((result)=>{
//     console.log("Data of Item Inserted");
// }).catch((err)=>{
//     console.log(err);
// });
