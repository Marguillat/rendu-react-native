import { StyleSheet, Text, View } from "react-native"

function PlateformChip({plateform}) {
  let color = "#ffd6a7"
  switch (plateform?.shortName) {
    case "XBXS":
      color="#7bf1a8"
      break;
    case "PS5":
      color="#8ec5ff"
      break;
    case "Switch":
      color="#ffa2a2"
      break;
    case "PC":
      color="#cad5e2"
      break;
    case "PS4":
      color="#8ec5ff"
      break;
  
    default:
      break;
  }

  return ( 
    <View style={{backgroundColor: color, maxWidth:"auto" , paddingInline:5, paddingVertical:2, borderRadius:10}}>
      <Text>{plateform?.shortName}</Text>
    </View>
   );
}



export default PlateformChip;