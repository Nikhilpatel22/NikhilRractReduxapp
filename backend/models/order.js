const Address = require('ipaddr.js')
const mongoose = require('mongoose')

const Oredr = mongoose.model("order",new mongoose.Schema({
    _id:{
        type:String,
        default: shortid.generate
    },
    email : String,
    name :String,
    address : String,
    total:Number,
        cartItem:[
            {
                _id: String,
                title : String,
                price : Number,
                count : Number,
            }
        ]   
},
{
    timestamps : true,  
}))