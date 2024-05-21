const express = require('express');

const forgotPasswordController = require('../controllers/email')

const router = express.Router();

router.post('/email', forgotPasswordController.forgotPassword)


module.exports = router;