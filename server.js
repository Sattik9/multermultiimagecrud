const express=require('express');
const bodyParser=require('body-parser');
require('dotenv').config();
const mongoose=require('mongoose');
const multiRoute=require("./Route/multiRoute");
const app=express();

app.use(bodyParser.json());
app.use('/upload',express.static('upload'));
app.use(multiRoute);
const port=process.env.PORT;
const dbDriver=process.env.URL;
mongoose.connect(dbDriver,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(port,()=>{
        console.log('db is connected');
        console.log(`server is running at http://localhost:${port}/users`);
    })
})
.catch((error)=>{
    console.log('error');
})