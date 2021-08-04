const User = require('../models/user.model');

module.exports.index = async (req, res) => {
    var users = await User.find();
    res.render('users/index', {
        users: users
    });
}

module.exports.viewUser = async (req, res) => {
    var userId = req.params.userId;
    var userX = await User.findOne({_id: userId});
    res.render('users/user', {
        userX: userX
    });
}