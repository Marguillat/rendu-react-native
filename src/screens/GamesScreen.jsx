import { StyleSheet, Text, View } from "react-native"
import GamesList from "../components/lists/GamesList"
import useGames from "../hooks/useGames"

function GamesScreen() {
  const {hallOfFame,upcoming} = useGames()

  return ( 
    <View style={style.container}>
      <GamesList title="Hall of Fame 2025" data={hallOfFame}/>
      <GamesList title="Ils arrivent bientot" data={upcoming} type="date"/>
    </View>
   );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#121212',
    height:"100%",
    flex:1,
    gap:40
  }
})

export default GamesScreen;