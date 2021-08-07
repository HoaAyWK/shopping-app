const md5 = require('md5');

const User = require('../models/user.model');

module.exports.index = (req, res) => {
    res.render('register/index');
}

module.exports.postCreate = async (req, res) => {
    var name = req.body.name;
    var mail = req.body.email;
    var password = req.body.password;
    var checkUser = await User.findOne({email: mail});
    if (!name) {
        res.render('register/index', {
            errors: [
                'Name is required.'
            ],
            values: req.body
        });
        return;
    }
    if (checkUser) {
        res.render('register/index', {
            errors: [
                'Email already exists.'
            ],
            values: req.body
        });
        return;
    }
    if (!password) {
        res.render('register/index', {
            errors: [
                'Password is required.'
            ],
            values: req.body
        });
        return;
    }
    var user = await User.create({name: name, email: mail, password: md5(password)});
    if (!user) {
        res.render('register/index', {
            errors: [
                'Error mongoose syntax.'
            ],
            values: req.body
        });
        return;
    }
    res.render('register/index', {
        message: 'Create successful.'
    });
}