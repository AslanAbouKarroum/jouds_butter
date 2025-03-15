const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const PORT = 2000;

const app = express();

// Middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/public', express.static('public'));


app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/checkout',(req, res)=>{
    res.sendFile(__dirname + '/public/checkout.html')
})

app.get('/contactUs',(req, res)=>{
    res.sendFile(__dirname + '/public/contactUs.html')
})

app.get('/loginRegistrationForm',(req, res)=>{
    res.sendFile(__dirname + '/public/loginRegistrationForm.html')
})

app.get('/productDetails',(req, res)=>{
    res.sendFile(__dirname + '/public/productDetails.html')
})

app.get('/products',(req, res)=>{
    res.sendFile(__dirname + '/public/products.html')
})

app.get('/stroeLocator',(req, res)=>{
    res.sendFile(__dirname + '/public/storeLocator.html')
})

app.get('/userAccount',(req, res)=>{
    res.sendFile(__dirname + '/public/userAccount.html')
})

// app.post('/press',(req,res)=>{
    
// })


// Start server
app.listen( process.env.PORT || PORT, ()=>{
    console.log(`Server connected on ${PORT}`)
})