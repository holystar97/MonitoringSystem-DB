const mongoose=require('mongoose');
const URI = "mongodb+srv://mkrice:minkyung0615@cluster0.0hqjo.mongodb.net/mkrice?retryWrites=true&w=majority";

const connectDB =async ()=>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected !! ');
};

module.exports =connectDB;