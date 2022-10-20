const http = require('http');
const path = require('path')
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false}));



app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404',{docTitle: 'error'});

});

app.listen(3000);