import { useEffect, useState } from "react"
import { getGameById } from "../services/opencritic.api"

const useSingleGame = (gameId) => {
  const [game,setGame] = useState([])

  // chelou la hook avec un params
  const getSingleGame = async () => {
    const gameResponse = await getGameById(gameId)
    setGame(gameResponse)
  }

  useEffect(() => {
    getSingleGame(gameId)
  },[])

  return {
    game
  }
}

export {useSingleGame}