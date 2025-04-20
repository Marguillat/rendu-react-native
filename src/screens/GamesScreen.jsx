import { Text, View } from "react-native"
import { getHallOfFames } from "../services/opencritic.api"
import { useEffect, useState } from "react"
import GamesList from "../components/lists/GamesList"
import useGames from "../hooks/useGames"

function GamesScreen() {
  const {hallOfFame,upcoming} = useGames()

  return ( 
    <View>
      <GamesList title="Hall of Fame 2025" data={hallOfFame}/>
      <GamesList title="Upcoming games" data={upcoming}/>
    </View>
   );
}

export default GamesScreen;