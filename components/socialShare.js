import {View, Text, TouchableOpacity, StyleSheet,Image} from 'react-native';


export default function SocialShare(){

    return(
        <View style={styles.contentContainer}>
        <View>
        <Text style={{color:'white',fontWeight:'bold'}}>Share on</Text>
        <Text style={{color:'white',fontWeight:'bold'}}>Social</Text>
        </View>
        <View style={{width:10}}></View>
          <TouchableOpacity>
              <Image source={require('../assets/whatsapp.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image source={require('../assets/snapchat.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image source={require('../assets/instagram.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image source={require('../assets/twitter.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image source={require('../assets/upload.png')} style={{width:40, height:40}}/>
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
      }
});