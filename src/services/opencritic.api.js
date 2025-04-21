import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL:Config.API_BASE_URL,
  headers:{
    'x-rapidapi-key': Config.API_KEY,
    'x-rapidapi-host': 'opencritic-api.p.rapidapi.com'
  }
})

const getHallOfFames = async()=> {
  try {
    const response = await api.get('/game/hall-of-fame')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getUpcoming = async () => {
  try {
    const response = await api.get('/game/upcoming')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// n'est pas utilisé au finial
const getGameImage = async (url) => {
  try {
    const response = await api.get('/'+url)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

const getGameById = async (gameId) => {
  try {
    const response = await api.get('/game/'+gameId)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getHallOfFames,
  getUpcoming,
  getGameImage,
  getGameById
}