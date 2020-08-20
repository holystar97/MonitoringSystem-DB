const mongoose = require('mongoose');
const subscriber = new mongoose.Schema({
    ip_address:{
        type:String
    }
});

module.exports = User = mongoose.model('subscriber',subscriber);
