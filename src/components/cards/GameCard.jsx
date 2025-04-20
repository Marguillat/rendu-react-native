import { Image, StyleSheet, Text, View } from "react-native"
import { getGameImage } from "../../services/opencritic.api"
import PlateformChip from "../chips/PlateformChip"

function GameCard ({game,type = 'score'}) {
  const cardImg = game?.images?.box?.sm || require('../../assets/Images/placeholder.jpg')
  return ( 
    <View style={stylesheet.container}>
      <Image 
        style={stylesheet.image}
        src={"https://img.opencritic.com/"+ cardImg}
        width={100}
        height={150}
        />
      <View style={stylesheet.textContainer}>
        <Text style={stylesheet.heading}>{game.name}</Text>
        <View style={stylesheet.chipContainner}>
          {game?.Platforms?.map((plateform)=>{
            return (
              <PlateformChip key={plateform.id} plateform={plateform}/>
            )
          })}
        </View>
        <View style={stylesheet.scoreContainer}>
          {game.topCriticScore != -1 ?
            <Text style={stylesheet.score}>{game.topCriticScore}</Text>
          : 
          ""
          }
        </View>
      </View>
    </View>
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
    minWidth:300,
    borderRadius:20,
    gap:10
  },
  image:{
    borderRadius:10
  },
  textContainer:{
    flex:1,
    flexDirection:'column',
    gap:10
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
    fontWeight:"700"
  }
})

export default GameCard ;