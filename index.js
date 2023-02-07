const express = require("express");

const cors = require("cors");
const {connectDatabase}  = require("./configs/connectDatabase");
const { AppRouter } = require("./Routers/AppRouter");
const AuthRouter = require("./Routers/AuthRouter");

const server = express();

server.use(express.json());

server.use(cors());

server.get("/",(req,res)=>{
    res.send("working");
})

server.use(AppRouter);

server.use(AuthRouter);

const port = process.argv[2] || 3004;

server.listen(port ,async ()=>{
    try{
       await connectDatabase;
       console.log("connect to database");
    }
    catch(err){
        console.error(err.message);
    }
    console.log(`server listening on port ${port}`)
})

