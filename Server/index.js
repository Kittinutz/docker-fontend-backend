const express = require('express')
const app = express()

app.listen(5000,()=>{
  console.log('Server : 5000',process.env)
})

app.get('/hello',(req,res)=>{
  res.send('helloworld')
})

app.get('/hell',(req,res)=>{
  res.send('hell')
})