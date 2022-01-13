const express = require('express');
const app = express();
require('./database/conn')

app.get('/',(req,res)=>{
    res.send('hello nikhil')
})


// app.post("/api/orders",async(req,res)=>{
//     if(!req.body.name ||
//         !req.body.email ||
//         !req.body.address ||
//         !req.body.total ||
//         !req.body.cartItem 
//         ){
//             return res.send({message:'data is require'})
//         }
//         const order = await Order(req.body).save();
//         res.send(order);
// })

module.exports = app;