import { useEffect, useState } from "react"
import { getHallOfFames, getUpcoming } from "../services/opencritic.api"

const useGames = () => {
  const [hallOfFame,setHallOfFame] = useState([])
  const [upcoming,setUpcoming] = useState([])
  
  // set up data functions
  const useHallOfFame = async () => {
    const gamesResponse = await getHallOfFames()
    setHallOfFame(gamesResponse)
  } 

  const useUpcoming = async () => {
    const gamesResponse = await getUpcoming()
    setUpcoming(gamesResponse)
  } 

  useEffect(()=>{
    useHallOfFame()
    useUpcoming()
  },[])

  return {
    hallOfFame,
    upcoming
  }
  
}

export default useGames