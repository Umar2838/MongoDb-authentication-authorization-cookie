const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
app.use(cookieParser())
//  how adding a cookie
// app.get("/",(req,res)=>{
//     res.cookie("name","harshika")
//     res.send("done")
// })

// to encrypt any password
app.get("/",(req,res)=>{
    // bcrypt.genSalt(10,function(err,salt){
    //     bcrypt.hash("umar", salt ,function(err,hash){
    //         console.log(hash)
    //     })
    // })
    // to campare password with bcrypt decription
    // bcrypt.compare("umar", "$2b$10$BCxrMzrUlW/WYB7rkhy0cOQZum8p96MDm19YWDdcqiRQ7JcmPRi7W", function(err,result){
    //     console.log(result)
    // })
    // jwt
let token = jwt.sign({email:"umar@gmail.com"},"secret")
res.cookie("token",token)
console.log(token)
res.send("done")
})

// how reading a cookie and data from token
app.get("/read",(req,res)=>{
    console.log(req.cookies.token)
    res.send("read page")
    let data = jwt.verify(req.cookies.token,"secret")
    console.log(data)
})
app.listen(3000)