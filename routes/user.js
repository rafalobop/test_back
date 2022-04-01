const {Router}  =  require('express')
const router = Router()
const {check} = require('express-validator')
const { crearUsuario } = require('../controllers/user')
const {validarCampos} = require('./../middlewares/validarCampos')
const {verificaExisteMail} = require('./../helpers/db-validators')


//aqui tenemos el metodo http para crear un nuevo usuario
router.post('/newUser', [
    //usamos el check del express-validator para validar los campos del body de la request
    check('nombre', "El nombre es obligatorio").not().isEmpty(),
    check('password', "El password debe tener un minimo de 6 letras").isLength({min: 6}),
    check('correo', "El correo no es valido").isEmail(),
    check('correo').custom(verificaExisteMail),

    //aqui hy un middleware personalizado para validar los campos
    validarCampos] 
    //funcion donde se ejecuta el metodo http
    ,crearUsuario)


module.exports = router