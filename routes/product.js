const express = require('express');
const router = express.Router();
const productModel = require('../models/product.js');

router.get(`/`,async(req,res)=>{
    const productList = await productModel.find();
    if(!productList){
        res.status(500).json({success:false})
    }
    res.send(productList);
})

router.put('/:id',async(req,res)=>{
    const productList = await productModel.findById(
        req.params.id,productModel
        )
        if(!productList) res.status(400).send('the product list cannot be found')

        res.send(productList);
    });
    
    
router.post(`/`,async(req,res)=>{
    const product = new productModel(req.body);

    await product.save();

    if(!product) 
    return res.status(500).send('The product cannot be created')

    res.send(product);
})

router.put('/delete/:id',async(req,res)=>{
    const productList = await ProductModel.findById(
        req.params.id,productModel
        )
        if(!productList) res.status(400).send('the product list cannot be found')

        res.send(productList);
    });

module.exports = router;