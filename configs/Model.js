const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id  : Number,
    prod_name : String,
    categories : String,
    best_price : Number,
    mrp : Number,
    url_1 : String,
    url_2 : String
  },
  {
    timestamps  : true
  })


  const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    gender : String,
    age : Number,
    password : String,
},
{
    timestamps : true,
    versionKey : false
})

  const UserModel = mongoose.model("user",UserSchema);

  const ProductModel = mongoose.model("product",ProductSchema);

  const TrendingModel = mongoose.model("trending",{image : String});

  const PopularModel = mongoose.model("popular",{title : String,image : String});

  module.exports = {
    ProductModel,
    TrendingModel,
    PopularModel,
    UserModel
  }