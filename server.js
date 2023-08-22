const express=require('express');
const cors = require('cors');
const product=require('./modle/product.js');
const PORT=3000;
var app=express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors({
    origin: '*'
}));


app.get('/',(req, res)=>{
   // product.add({"product_name":"demo1","unit_price":21,"quantity":5});
    res.setHeader('Content-Type', 'application/json');
    res.jsonp(product.all());
});

app.get('/product',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.jsonp(product.all());
});


app.put('/product/:company',(req,res)=>{
    company = req.params.company;
 console.log(company);
});


app.post('/product',(req,res)=>{
    product.add(req.body)
    res.setHeader('Content-Type', 'application/json');
    res.jsonp(product.all());
  
});


app.listen(PORT,(s)=>{
    console.log(`http://localhost:${PORT} started...`);
});