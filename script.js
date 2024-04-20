const express = require('express');

const reviewRouter=require('./routes/reviewRoutes.js');
const productsRouter= require('./routes/productsRoutes.js');


const app = express();
const test=require('./models/productsModel.js');

const mongoose = require('mongoose'); 

app.use(express.json());
app.use('/api/products',productsRouter);
app.use('/api/review',reviewRouter);


const url='mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.9mallyc.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser= 'prathamdhingra14';
const databaseName= 'Amazon-Backend'; 
const databasePassword= 'abcd1234'

let dblink = url.replace("$_USERNAME_$",databaseUser);
dblink = dblink.replace("$_PASSWORD_$",databasePassword);
dblink = dblink.replace("$_DB_NAME_$",databaseName);

mongoose.connect(dblink) 
  .then(() => console.log('.....................Database Connected..................'));

app.listen(1400,()=>{
    console.log('----------App Started---------'); 
});   



