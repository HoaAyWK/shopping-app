const md5 = require('md5');

const User = require('../models/user.model');

module.exports.index = (req, res) => {
    res.render('login/index');
}

module.exports.login = async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var user = await User.findOne({email: email});
    if (!user) {
       res.render('login/index', {
           errors: ['User does not exist.'
            ],
            values: req.body
       });
       return;
    }
    var hashedpassword = md5(password);
    if (hashedpassword !== user.password) {
        res.render('login/index', {
            errors: ['Wrong password.'
            ],
             values: req.body
        });
        return;
    }
    res.cookie('userId', user._id, {
        signed: true
    });
    res.redirect('/users');
}