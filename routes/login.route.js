const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');
router.get('/login', loginController.index);

router.post('/login', loginController.login);

module.exports = router;
