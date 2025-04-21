import { View } from "react-native"
import PlateformChip from "../chips/PlateformChip"

function ChipList({data ,style={} }) {
  return ( 
    <View style={style}>
      {data.map((plateform)=>{
        return (
          <PlateformChip key={plateform.id} plateform={plateform}/>
        )
      })}
    </View>
  )
}

export default ChipList;