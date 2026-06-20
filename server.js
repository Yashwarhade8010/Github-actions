const express = require('express')

const PORT = 8080

const app = express()

app.get("/",(req,res)=>{
    return res
      .status(200)
      .json("Hello this is message from server updated version");
})

app.listen(PORT,console.log("Server is running on PORT:",PORT))