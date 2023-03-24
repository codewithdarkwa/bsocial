
import { StyleSheet,View, Text,TouchableOpacity } from "react-native"

export default function AddContent(){

    return(
        <View style={styles.contentContainer}>
        <View>
          <Text style={{color:'white',fontWeight:'bold'}}>Add your</Text>
          <Text style={{color:'white',fontWeight:'bold'}}>content here</Text>
        </View>
        <TouchableOpacity style={styles.button} opacity={0.5}>
          <Text style={{fontWeight:'bold'}}>Add Content</Text>
        </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({

    contentContainer:{
        width:'85%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:20, 
        justifyContent:'space-between',
         backgroundColor:'#1c1a1b',
         padding:25,
         borderRadius:20
      },
      button:{
        alignItems: 'center',
               justifyContent: 'center',
               paddingVertical: 7,
               paddingHorizontal: 20,
               borderRadius: 25,
               elevation: 3,
               backgroundColor: 'white',
      },
});