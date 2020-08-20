const cors = require('cors');
const express =require('express');
const connectDB=require('./DB/Connection');
const app =express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());                                 //json 읽기
app.use(bodyParser.urlencoded({extended:true}));    //GET, POST 읽기
var router = express.Router();

connectDB();
app.use(cors());
app.use('/api/userModel', require('./Api/User'));
app.use('/addIp', require('./Api/Subscriber'))
app.use('/getIpList', require('./Api/IpList'));
app.use('/deleteIp' ,require('./Api/DeleteIp'));

const Port=process.env.Port || 3000;

app.listen(Port,()=>console.log('Server started ! '));




