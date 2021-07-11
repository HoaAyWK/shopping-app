require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true});

const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
  res.render('index');
});
app.use('/products', productRoute);
app.use('/users', userRoute);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});