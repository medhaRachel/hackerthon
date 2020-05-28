const express = require('express')
const app = express()
const morgan= require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')



const registerRoutes=require('./routes/register')
const loginRoutes=require('./routes/login')

mongoose.connect('mongodb+srv://Medha:Medha@cluster0-adqz1.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})


app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/register',registerRoutes)
app.use('/login',loginRoutes)

module.exports=app