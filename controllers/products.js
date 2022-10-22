const Product = require('../models/products');

exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product',{
        docTitle: 'Product',
    });
}

exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}      

exports.getProducts = (req, res, next )=>{
    const products = Product.fetchAll((products)=>{
        res.render('shop/product-list',{
            docTitle: 'Shop', 
            prods: products
        });
    });
}