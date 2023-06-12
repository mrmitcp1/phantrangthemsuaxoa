const mysql = require('mysql');
const express = require('express');
const path = require('path');
const router = require('./src/routers/web.routers');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')


const app = express();
const PORT = 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static('public'));
app.use(router)

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'src/template'));

app.listen(PORT,()=>{
    console.log('server running')
})