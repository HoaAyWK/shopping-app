const User = require('../models/user.model');

module.exports.index = async (req, res) => {
    var q = req.query.user;
    var users = await User.find({name: new RegExp(q, 'i')});
    res.render('users/index', {
        users: users
    });
}