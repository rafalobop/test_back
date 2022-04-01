const {Router}  =  require('express')
const router = Router()
const {check} = require('express-validator')
const { crearUsuario } = require('../controllers/user')
const {validarCampos} = require('./../middlewares/validarCampos')

router.post('/newUser', [
    check('nombre', "El nombre es obligatorio").not().isEmpty(),
    check('password', "El password debe tener un minimo de 6 letras").isLength({min: 6}),
    check('correo', "El correo no es valido").isEmail(),
    validarCampos] 
    ,crearUsuario)


module.exports = router