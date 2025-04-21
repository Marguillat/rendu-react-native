import { FlatList, StyleSheet, Text, View } from "react-native"
import GameCard from "../cards/GameCard"

function GamesList({data,title,type}) {
  return ( 
    <View>
      <Text style={stylesheet.heading}>{title}</Text>
      <FlatList
        style={stylesheet.listContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({index,item,separators})=>(
          <GameCard key={index} game={item} type={type}/>
        )}
      />
    </View>
   );
}

const stylesheet = StyleSheet.create({
  heading: {
    fontSize: 22,
    color: '#ccc',
  },
})

export default GamesList;