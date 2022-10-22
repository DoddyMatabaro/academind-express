const http = require('http');
const path = require('path')
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false}));



app.use('/admin', adminRoutes);
app.use(shopRoutes); 

app.use(errorController.get404);

app.listen(3000);