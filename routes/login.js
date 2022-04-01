const {Router} = require('express')
const {check} = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')
const router = Router()
const {login} = require('./../controllers/auth')

router.post('/', [
    //validarJWT,
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', "La contraseña es obligatoria").not().isEmpty(),
    validarCampos 
] ,login)

module.exports = router