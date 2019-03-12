var Product = require('../models/product');
var mongoose = require('mongoose');

var uri = 'mongodb+srv://subrat:subrat410@ecommerce-whasf.gcp.mongodb.net/test?retryWrites=true';
mongoose.connect(uri,{useNewUrlParser:true});

var products = [new Product({
    imagePath:'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/others/OnePlus-6T/OnePlus-6T-Mirror-Black-1-3x.jpg',
    title:'OnePlus 6T',
    description:'Wonderful Mobile Phone',
    price:'40000'
}),new Product({
    imagePath:'https://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s5-g900f.jpg',
    title:'Samsung Galaxy S5',
    description:'Theek theek mobile phone',
    price:'10000'
}),new Product({
    imagePath:'https://image.coolblue.be/422x390/products/1033437',
    title:'Apple IPhone X',
    description:'People love it, so Theek hai',
    price:'100000'
}),new Product({
    imagePath:'https://cf2.s3.souqcdn.com/item/2018/02/28/31/95/45/24/item_XL_31954524_114813732.jpg',
    title:'OnePlus 5T',
    description:'People love it, so Theek hai',
    price:'30000'
}),new Product({
    imagePath:'http://cdn.shopify.com/s/files/1/0808/0067/products/nex6p_nh_ex_title01_gunmetal_grande.jpg?v=1518570778',
    title:'Huawei Nexus 6P',
    description:'People don\'t love it, so Theek hai',
    price:'100000'
})];

var done = 0;
for (var i = 0; i<products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}
