var express = require('express');
const nodemon = require('nodemon');
var router = express.Router();
const loginController = require('../controllers/LoginController');

//tela de login
router.get('/', loginController.login)

router.post('/login', function (req, res, next) {
    // console.log(usuario:nome)
    next()
}, loginController.login)



module.exports = router;