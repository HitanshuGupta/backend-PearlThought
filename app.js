const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg: 'Hello From Backend'
    })
})

app.listen(3000)