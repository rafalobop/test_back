const {Router} = require('express')
const {check} = require('express-validator')
const { validarCampos } = require('../middlewares/validarCampos')
const { validarJWT } = require('../middlewares/validarJWT')
const router = Router()
const {login} = require('./../controllers/auth')

router.post('/', [
    //validarJWT,
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', "La contraseña es obligatoria").not().isEmpty(),
    validarCampos 
] ,login)

module.exports = router