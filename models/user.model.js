const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String
});
var User = mongoose.model('User', userSchema);

module.exports = User;