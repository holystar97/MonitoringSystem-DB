const express=require('express');
const mongoose=require('mongoose');
const Subscriber=require('../DB/Subscriber');
var SubscriberList;
const route = express.Router();
const cors=require('cors');


route.get('/',async (req,res)=>{
    Subscriber.find(function (err, subscribers){
        if(err)
            return;

       // res.redirect('http://localhost:63342/testjs/index.html');
        res.json(subscribers);
    });
});



/*
route.post('/',async (req,res)=>{
    //const {ip_address} = req.body;
    Subscriber.find(function (err, subscribers){
        if(err) return;

        console.log(subscribers);
        res.json(subscribers);

    });

    let subscriber={};
    subscriber.ip_address = ip_address;
    let subscriberModel=new Subscriber(subscriber);
    await subscriberModel.save();
    res.redirect('http://localhost:63342/testjs/index.html');
    res.json(subscriberModel);

});
 */

module.exports = route;