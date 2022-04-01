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
    const requestOptions = {
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/photos',        
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

module.exports = {
    getPhotos,
    getPosts
}