const Product = require('../models/products');

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{
        docTitle: 'Product',
    });
}

exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}      

exports.getProducts = (req, res, next )=>{
    const products = Product.fetchAll();
    res.render('shop',{docTitle: 'Shop', prods: products});
}