import {StyleSheet, SafeAreaView, Text, View,TouchableOpacity,Image, } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Carousel from 'react-native-snap-carousel';

const data = [
  { title: 'Battle' },
  { title: 'Sing' },
  { title: 'Discuss' },
];

const renderItem = ({ item }) => (
 <LinearGradient colors={['#df556d', '#e1665e', '#e57c4f','#e9a840']} style={styles.linearGradient}>
        <Text style={{color:'white', fontSize:40,fontWeight:'bold'}}>{item.title}</Text>
  </LinearGradient>
);

export default function App() {
  return (
    <SafeAreaView style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#040404'
    }}>
      
      <Text style={{fontSize:20,color:'white',marginTop:20}}>Create</Text>
      <Text style={{fontSize:14,width:250,color:'white',fontWeight:'bold',marginTop:5}}>
      Swipe to pick which 
      type of content you want
      to create for your audience
       </Text>
  <Carousel
  data={data}
  renderItem={renderItem}
  sliderWidth={300}
  itemWidth={300}
  loop={true}
  autoplay={true}
  autoplayDelay={500}
  autoplayInterval={3000}
/>

       <View style={styles.contentContainer}>
        <View>
          <Text style={{color:'white',fontWeight:'bold'}}>Add your</Text>
          <Text style={{color:'white',fontWeight:'bold'}}>content here</Text>
        </View>
        <TouchableOpacity style={styles.button} opacity={0.5}>
          <Text style={{fontWeight:'bold'}}>Add Content</Text>
        </TouchableOpacity>
       </View>
       <View style={styles.contentContainer}>
        <View>
        <Text style={{color:'white',fontWeight:'bold'}}>Share on</Text>
        <Text style={{color:'white',fontWeight:'bold'}}>Social</Text>
        </View>
        <View style={{width:10}}></View>
          <TouchableOpacity>
              <Image source={require('./assets/whatsapp.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image source={require('./assets/snapchat.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image source={require('./assets/instagram.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image source={require('./assets/twitter.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Image source={require('./assets/upload.png')} style={{width:40, height:40}}/>
          </TouchableOpacity>
          
       </View>

       <View style={styles.contentContainer}>
            <Text style={{color:'white',fontWeight:'bold'}}>Besocial_link</Text>
          <TouchableOpacity style={styles.button} opacity={0.5}>
          <Text style={{fontWeight:'bold',fontWeight:'bold'}}>Copy link</Text>
        </TouchableOpacity>
       </View>
       
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  button:{
    alignItems: 'center',
           justifyContent: 'center',
           paddingVertical: 7,
           paddingHorizontal: 20,
           borderRadius: 25,
           elevation: 3,
           backgroundColor: 'white',
  },
  linearGradient: {
    height:330,
    marginTop:30,
    alignItems:'center',
   justifyContent:'center',
   borderRadius:30
  },
  card:{
    width:300, 
    height:300,
    backgroundColor:'#db5c65',
    marginTop:30,
    alignItems:'center',
   justifyContent:'center',
   borderRadius:30
  },
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
