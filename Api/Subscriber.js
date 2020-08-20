const express=require('express');
const mongoose=require('mongoose');
const Subscriber=require('../DB/Subscriber');
const route = express.Router();

route.post('/',async (req,res)=>{
    //const {ip_address} = req.body;
    const { body: {
        ip_address
    }} = req
    console.log("ip_address : " + ip_address)
    let subscriber={};
    subscriber.ip_address = ip_address;
    let subscriberModel=new Subscriber(subscriber);
    await subscriberModel.save();

    return res.redirect('http://localhost:63342/testjs/index.html');
    res.json(subscriberModel);

});
/*
route.get('/',async (req,res)=>{
    const {ip_address} = req.body;
    Subscriber.find(function (err, subscribers){
        if(err) return;

        res.json(subscribers);
    });
    let subscriber={};
    subscriber.ip_address = ip_address;
    let subscriberModel=new Subscriber(subscriber);
    await subscriberModel.save();
    res.redirect('http://localhost:63342/testjs/index.html');
    res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
    res.json(subscriberModel);

});
*/

module.exports = route;