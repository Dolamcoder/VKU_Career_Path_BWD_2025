const express = require('express');
const router = express.Router();
const { getHome, getAdvise, getLogin } = require('../controller/indexController.js');
const accountController = require('../controller/AccountController.js');

router.get('/', getHome);
router.get('/advise', getAdvise);
router.get('/login', getLogin);
router.post('/regester', accountController.createAccount);
router.post('/login', accountController.loginAccount);
module.exports = router;