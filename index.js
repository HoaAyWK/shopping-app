require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true});

const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');
const loginRoute = require('./routes/login.route');
const searchUserRoute = require('./routes/search-user.route');
const registerRoute = require('./routes/register.route');
const port = 3000;

const authMiddleware = require('./middlewares/auth.middleware');

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/');
});

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.use('/products', authMiddleware.requireAuth, productRoute);
app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/search', authMiddleware.requireAuth, searchUserRoute);
app.use('/', loginRoute);
app.use('/register', registerRoute);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});