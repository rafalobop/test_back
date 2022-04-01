const {Router} = require('express')
const { validarJWT } = require('../middlewares/validarJWT')
const router = Router()
const {getPhotos,getPosts} = require('../controllers/getExternalData')

router.get('/post',[validarJWT], getPosts)
router.get('/photos',[validarJWT], getPhotos)

module.exports = router

