const express=require("express")
const fs=require("fs");
const path=require("path")
const dirpath=path.join(__dirname)
const app=express()

// app.get("/sampleendpoint", (req, res)=>{
//     res.send("web server checking fine")
// })

app.get("/timestamp", (req, res)=>{
    let date=new Date();
    const datetimestamp=date.toUTCString()
    console.log(datetimestamp)
    fs.writeFileSync("./current date-time.txt", datetimestamp, (err)=>{
        if(err){
            res.send({message:"error datetimestamp"})
        }
    })
    res.send(datetimestamp)
})

app.get("/retrievefiles", (req, res)=>{
    fs.readFile(`${dirpath}/sampletext.txt`, "utf-8", (err)=>{
        if(err){
            res.send({message: "Error in readfiles"})
        }
    })
    res.sendFile(path.join(dirpath, "sampletext.txt"))
    
})
app.listen(8000, ()=>console.log("server started in localhost:8000"))