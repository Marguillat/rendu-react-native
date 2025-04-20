import { createNativeStackNavigator } from "@react-navigation/native-stack"
import GamesScreen from "../screens/GamesScreen"

const Stack = createNativeStackNavigator()

function MainNavigator() {
  return ( 
      <Stack.Navigator>
        <Stack.Screen name="Games" component={GamesScreen}/>
      </Stack.Navigator>
   );
}

export default MainNavigator;