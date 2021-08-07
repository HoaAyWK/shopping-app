const express = require('express');
const router = express.Router();

const registerController = require('../controllers/register.controller');
router.get('/', registerController.index);
router.post('/', registerController.postCreate);

module.exports = router;
