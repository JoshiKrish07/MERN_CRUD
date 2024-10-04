const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const app = express();
require('dotenv').config()

const Port = process.env.PORT;

// connect with database
mongoose.connect(process.env.DB_URL)
.then(()=> console.log("database connected"))
.catch((err) => console.log('db not connected',err));

// middlewares
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/', userRoute);

// setting the server
app.listen(Port,(err) => {
    err ? new Error(err) : console.log(`server started at port ${Port}`)
})