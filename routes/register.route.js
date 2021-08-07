const express = require('express');
const multer  = require('multer');

const router = express.Router();
const upload = multer({ dest: 'public/uploads/' });

const registerController = require('../controllers/register.controller');
router.get('/', registerController.index);
router.post('/', upload.single('avatar'), registerController.postCreate);

module.exports = router;
