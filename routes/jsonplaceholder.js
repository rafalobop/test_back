const {Router} = require('express')
const { validarJWT } = require('../middlewares/validarJWT')
const router = Router()
const {getPhotos,getPosts} = require('../controllers/getExternalData')

router.get('/post', getPosts)
router.get('/photos', getPhotos)

module.exports = router

