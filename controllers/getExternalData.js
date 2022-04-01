const axios = require('axios')


const getPosts = async(req,res)=>{
    const requestOptions = {
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/posts',        
    }
    try {
        let response = await axios(requestOptions)
        if(response){
           return res.status(200).json(response.data)
        }
    } catch (error) {
        console.log('err', error)
        return res.status(400).json({
            msg:'Hubo un error al consultar las imagenes'
        })
    }
}

const getPhotos = async(req,res)=>{
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)

    const startIndex = (page-1)*limit
    const endIndex = page*limit


    const requestOptions = {
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/photos',        
    }
    try {
        let response = await axios(requestOptions)
        if(response){
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
        console.log('err', error)
        return res.status(400).json({
            msg:'Hubo un error al consultar las imagenes'
        })
    }
}

module.exports = {
    getPhotos,
    getPosts
}