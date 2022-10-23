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

exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('admin/products',{
            docTitle: 'Admin Products', 
            prods: products,
            path: '/admin/products'
        });
    });
}