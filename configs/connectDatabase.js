const mongoose = require("mongoose");

const connectDatabase = mongoose.connect("mongodb+srv://grocery:grocery_007@cluster0.r8m0k0i.mongodb.net/frankBody?retryWrites=true&w=majority");

module.exports = connectDatabase;

