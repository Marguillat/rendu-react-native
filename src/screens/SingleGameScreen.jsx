import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { useSingleGame } from "../hooks/useSingleGame"
import ChipList from "../components/lists/ChipList"

function SingleGameScreen({route}) {
  const {gameId} = route.params
  const {game} = useSingleGame(gameId)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: "https://img.opencritic.com/"+game?.images?.banner?.sm }} style={styles.banner} />

      <Text style={styles.name}>{game?.name}</Text>

      <Text style={styles.percent}>
        {game?.percentRecommended?.toFixed(1)}% de recommandation par la critique
      </Text>
      {game?.Platforms ? (
        <View>
          <Text style={{marginBottom:10, color: '#ccc'}}> Plateformes : </Text>
          <ChipList style={styles.chipContainner} data={game?.Platforms}/>
        </View>
      ) : <></> }
      <Text style={styles.description}>{game?.description}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#121212',
    flexGrow: 1,
    alignItems: 'left',
    flex:1,
    gap:10
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  percent: {
    fontSize: 16,
    color: '#a0e1a0',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'left',
  },
  chipContainner:{
    display:'flex',
    flexDirection:"row",
    flexWrap:"wrap",
    gap: 5
  },
});
export default SingleGameScreen;