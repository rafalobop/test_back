const {Router} = require('express')
const {check} = require('express-validator')
const { validarCampos } = require('../middlewares/validarCampos')
const router = Router()
const {login} = require('./../controllers/auth')

//aqui tenemos el metodo http para logear

router.post('/', [
    //usamos el check del express-validator para validar los campos del body de la request

    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', "La contraseña es obligatoria").not().isEmpty(),
    //aqui hy un middleware personalizado para validar los campos

    validarCampos, 
    //funcion donde se ejecuta el metodo http

] ,login)

module.exports = router