const usuario = require('../database/usuarios.json')

module.exports = {
    
    //tela de login
    login: (req, res) => {
        res.render('login', {usuario})
    }
}