const {Router} = require('express')
const { validarJWT } = require('../middlewares/validarJWT')
const router = Router()
const {getPhotos,getPosts} = require('../controllers/getExternalData')

//aqui tenemos el metodo http para crear un nuevo usuario

router.get('/post',
    //aqui hy un middleware personalizado para validar los campos
    [validarJWT], 
    //funcion donde se ejecuta el metodo http
    getPosts
)

    //IDEM 
router.get('/photos',
    [validarJWT], 
    getPhotos
)

module.exports = router

