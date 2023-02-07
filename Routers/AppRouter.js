const express = require("express");
const { ProductModel, TrendingModel, PopularModel } = require("../configs/Model");

AppRouter = express.Router();

AppRouter.get("/product",async (req,res)=>{
    try{
        const data = await ProductModel.find();
         res.send(data);
    }
    catch(err){
        console.log(err.message);
        res.send("error")
    }
});

AppRouter.get("/product/:id",async (req,res)=>{
    try{
        const data = await ProductModel.findById(req.params.id);
         res.send(data);
    }
    catch(err){
        console.log(err.message);
        res.send("error")
    }
});

AppRouter.get("/popular",async (req,res)=>{
    try{
        const data = await PopularModel.find();
         res.send(data);
    }
    catch(err){
        console.log(err.message);
        res.send("error")
    }
});

AppRouter.get("/trending",async (req,res)=>{
    try{
        const data = await TrendingModel.find();
         res.send(data);
    }
    catch(err){
        console.log(err.message);
        res.send("error")
    }
});


module.exports = {
    AppRouter
}