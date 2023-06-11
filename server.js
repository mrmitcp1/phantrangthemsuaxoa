const mysql = require('mysql');
const express = require('express');
const path = require('path');
const router = require('./src/routers/web.routers')

const app = express();
const PORT = 3333;

app.use(router)

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'src/template'));

app.listen(PORT,()=>{
    console.log('server running')
})