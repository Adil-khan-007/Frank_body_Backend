const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = mongoose.connect(process.env.MONGODB);

module.exports = connectDatabase;

