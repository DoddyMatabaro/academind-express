const products = [];

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{
        docTitle: 'Product',
    });
}

exports.postAddProduct = (req, res, next)=>{
    products.push({ title: req.body.title })
    res.redirect('/');
}

exports.getProducts = (req, res, next )=>{
    res.render('shop',{docTitle: 'Shop', prods: products});
}