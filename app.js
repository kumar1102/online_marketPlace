const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productsRoute = require('./routes/product')
const router = require('./routes/user')

require('dotenv/config');


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


const api = process.env.API_URL;

//Routers
app.use(api+'/products',productsRoute);
app.use(api+'/users',router);


require('dotenv/config');

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('Database connection is ready');
})
.catch((error)=>{
    console.log(error);
})


app.listen(3000, ()=>{
    console.log(api);
    console.log('server running');
})