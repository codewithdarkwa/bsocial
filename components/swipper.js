import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet,Text} from 'react-native';
import Carousel from 'react-native-snap-carousel'


export default function Swipper(){

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

  return (
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
  );

}


const styles = StyleSheet.create({

  linearGradient: {
    height:330,
    marginTop:30,
    alignItems:'center',
   justifyContent:'center',
   borderRadius:30
  },
});