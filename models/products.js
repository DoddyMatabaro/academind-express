const console = require('console');
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
);

const getProductsFromFile = (cb)=>{
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            cb([]);
        }
        cb(JSON.parse(fileContent));
    })
}
module.exports = class Product{
    constructor (title, imgeUrl, description, price) {
        this.title = title;
        this.imgeUrl = imgeUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products =>{
                products.push(this);
                fs.writeFile(p, JSON.stringify(products),(err)=>{
                    console.log(err);
                });
           });
    }

    static fetchAll(cb){
       getProductsFromFile(cb);
    }
    static findById(id, cb){
        getProductsFromFile(products =>{
            const product = products.find(p => p.id === id);
            cb(product)
        })
    }
};