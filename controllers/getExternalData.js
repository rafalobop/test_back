const axios = require('axios')


const getPosts = async(req,res)=>{
    //options de la req al ep externo
    const requestOptions = {
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/posts',        
    }
    try {
        let response = await axios(requestOptions)
        //devuelve la respuesta exitosa
        if(response){
           return res.status(200).json(response.data)
        }
    } catch (error) {
        //atrapa el error
        return res.status(400).json({
            msg:'Hubo un error al consultar las imagenes'
        })
    }
}

const getPhotos = async(req,res)=>{
    //creamos el limite y la pagina
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)

    //indice final e inicial
    const startIndex = (page-1)*limit
    const endIndex = page*limit


    //options de la req al ep externo
    const requestOptions = {
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/photos',        
    }
    try {
        let response = await axios(requestOptions)
        if(response){
            //si hay respuesta correcta configuramos la paginacion
            const total = response.data.length
            const resPaginated = {
                page: page,
                next: page*limit >= total ? null : page+1,
                previous: startIndex === 0 ? null : page-1 ,
                data: response.data.slice(startIndex, endIndex)
            }
           return res.status(200).json(resPaginated)
        }
    } catch (error) {
        //devuelve error en caso de fallar
        return res.status(400).json({
            msg:'Hubo un error al consultar las imagenes'
        })
    }
}

module.exports = {
    getPhotos,
    getPosts
}