const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)

        // rutas de las peticiones en orden
        console.log(url_api);
        console.log(url_api + data.results[0].id); 
        console.log(character.origin.url); 

    }
    catch(error){
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')