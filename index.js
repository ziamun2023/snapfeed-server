const express =require('express')
const app =express()


app.get('/',(req,res)=>{
    res.send('api is runnig')
})
app.listen(5000, console.log("server is runni g "))