const User = require('../models/user.model');

module.exports.index = async (req, res) => {
    var users = await User.find();
    res.render('users/index', {
        users: users
    });
}