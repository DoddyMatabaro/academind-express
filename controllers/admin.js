const Product = require('../models/products');

exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product',{
        docTitle: 'Product',
    });
}

exports.postAddProduct = (req, res, next)=>{
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
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