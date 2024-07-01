const fs=require("fs")
fs.writeFile("welcome.txt","hello node",(error)=>{
    //console.log(error)
    if (error) throw error
    console.log("file has created")
})
fs.readFile("hello.txt",(error,data)=>{
    if (error) throw error
    console.log(data.toString())
})