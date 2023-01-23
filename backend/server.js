const express = require("express")
const app = express()
const cors = require("cors")
const io = require("socket.io")(7777,{
    cors:"*"
})

io.on("connecttion",(socket)=>{
    console.log(socket.id, "just connected")
})