import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function BSocialLink(){


    return(
   <View style={styles.contentContainer}>
        <Text style={{color:'white',fontWeight:'bold'}}>Besocial_link</Text>
      <TouchableOpacity style={styles.button} opacity={0.5}>
      <Text style={{fontWeight:'bold',fontWeight:'bold'}}>Copy link</Text>
    </TouchableOpacity>
   </View>
    );
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
})