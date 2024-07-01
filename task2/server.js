const express=require("express")
const app = express()
const port = 3000
app.get("/",(req,res)=>{
    res.writeHead(200,{"content-Type":"text/html"})
res.write("<h1>Hello Node !!! </h1>")
res.end()
})
app.listen(port,console.log("server is runing"))
// app.get("/farhat/:id/:x",(req,res)=>{
//   const x= +req.params.x
//   const id= +req.params.id
//   res.send({result:x+id})
// })