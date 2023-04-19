// import libary
const bodyParser = require('body-parser');         
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
// import file
const ConnDB = require('./configs/db') 
const router = require('./routes/routes')

//variable
const port = process.env.PORT || 3000;

// use libary
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '10mb', extended:true}))

ConnDB()
app.use(router);

app.post('/user', (req, res) => {
    res.send('create user')
})

//run
app.listen(port, () => {
    console.log('server runing on port ', port);
});