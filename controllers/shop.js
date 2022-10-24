const Product = require('../models/products');

exports.getProducts = (req, res, next )=>{
   Product.fetchAll((products)=>{
        res.render('shop/product-list',{
            docTitle: 'Shop', 
            prods: products
        });
    });
}

exports.getProduct = (req, res, next)=>{
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
}

exports.getIndex = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('shop/index',{
            docTitle: 'Shop', 
            prods: products
        });
    });
}

exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{
        path: '/cart',
        docTitle: 'Your Cart', 
    });
}

exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout',{
        path: '/checkout',
        docTitle: 'Checkout', 
    });
}

exports.getOrders = (req, res, next)=>{
    res.render('shop/orders',{
        path: '/orders',
        docTitle: 'Orders', 
    });
}