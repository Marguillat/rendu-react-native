import { createNativeStackNavigator } from "@react-navigation/native-stack"
import GamesScreen from "../screens/GamesScreen"
import SingleGameScreen from "../screens/SingleGameScreen"

const Stack = createNativeStackNavigator()

function MainNavigator() {
  return ( 
      <Stack.Navigator>
        <Stack.Screen name="Games" component={GamesScreen}/>
        <Stack.Screen 
          name="SingleGame" 
          component={SingleGameScreen} 
          initialParams={{ gameId:463 }}/> 
          {/* game id par défaut parce que c'est celui de The witcher 3, le meilleur RPG qui n'est jamais vu le jour , je ne veux aucun débat */}
      </Stack.Navigator>
   );
}

export default MainNavigator;