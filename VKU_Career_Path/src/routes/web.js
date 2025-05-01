const express = require('express');
const router = express.Router();
const {getHome, getAdvise}=require('../controller/indexController');
//router.get(route, handler);
router.get('/', getHome);
router.get('/advise', getAdvise);
module.exports = router;