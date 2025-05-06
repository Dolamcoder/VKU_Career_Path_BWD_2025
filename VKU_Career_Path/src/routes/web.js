const express = require('express');
const router = express.Router();
const {getHome, getAdvise, getLogin}=require('../controller/indexController');
//router.get(route, handler);
router.get('/', getHome);
router.get('/advise', getAdvise);
router.get('/login', getLogin)
module.exports = router;