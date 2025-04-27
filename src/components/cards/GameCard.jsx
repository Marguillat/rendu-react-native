import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ChipList from "../lists/ChipList"

function GameCard ({game,type = 'score'}) {
  const navigation = useNavigation()

  // img
  let cardImg = 'https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png'
  if (game?.images?.box?.sm ) {
    cardImg = "https://img.opencritic.com/"+game?.images?.box?.sm 
  }

  // date 
  const formattedDate = new Date(game?.firstReleaseDate).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const handlePress = () => {
    navigation.navigate("SingleGame",{
      gameId: game.id
    })
  }

  return ( 
    <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
      <View style={stylesheet.container}>
        <Image 
          style={stylesheet.image}
          src={cardImg}
          width={100}
          height={150}
          />
        <View style={stylesheet.textContainer}>
          <Text style={stylesheet.text}>{game.name}</Text>
          <View style={stylesheet.chipContainner}>
            {game?.Platforms ? (<ChipList data={game?.Platforms} style={stylesheet.chipContainner}/>) : ""}
          </View>

          {type == 'score' ?
            (<View style={stylesheet.scoreContainer}>
              <Text style={stylesheet.score}>{game.topCriticScore}</Text>
            </View>)
            :type == 'date' ?
              (<View>
                <Text style={stylesheet.date}>{formattedDate}</Text>
              </View>)
            : ""
          }
          
        </View>
      </View>
    </TouchableOpacity>
   );
}

const stylesheet = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#99999d",
    padding:10,
    marginRight:10,
    width:300,
    borderRadius:20,
    gap:10
  },
  image:{
    borderRadius:10
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    maxWidth: '100%',
  },
  chipContainner:{
    display:'flex',
    flexDirection:"row",
    flexWrap:"wrap",
    gap: 5
  },
  scoreContainer: {
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  },
  score:{
    fontSize: 40,
    fontWeight:"700",
    color: '#ccc',
  },
  text:{
    color: '#ccc',
    flexShrink: 1, 
    flexWrap: 'wrap',
    flex: 0,
    numberOfLines: 0,
  },
  date:{
    color: '#ccc',
    fontSize:25,
    margin:'auto'
  }
})

export default GameCard ;