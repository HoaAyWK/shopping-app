var Product = require('../models/product.model');

module.exports.index = async (req, res) => {
    var products = await Product.find();
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;
    var start = (page - 1) * perPage;
    var end = page * perPage;
    var totalPage = parseInt(products.length/8);
    if (page % 8 !== 0) ++totalPage;        // 8 products per page
    res.render('products/index',{
        products: products.slice(start, end),
        page: page,
        priviousPage: page - 1,
        nextPage: page + 1,
        totalPage: totalPage
    });
}