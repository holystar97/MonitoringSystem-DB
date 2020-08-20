const express=require('express');
const mongoose=require('mongoose');
const Subscriber=require('../DB/Subscriber');
var SubscriberList;
const route = express.Router();
const cors=require('cors');


route.get('/',async (req,res)=>{
    //const {ip_address} = req.body;
    var myquery = { ip_address: req.query.ip_address };
    debugger;
    /*
    const { body: {
        ip_address
    }} = req

     */
    Subscriber.deleteMany(myquery, function (err, result){
        if(err)
            return;
        else {
            console.log(myquery.ip_address + " deleted");
            res.send(result);
        }

        //res.json(subscribers);
    });
});


module.exports = route;