import {View,Image,TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs({navigation}){

    return(
        <View style={{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'black',
        }}>
            <TouchableOpacity onPress={()=>navigation.navigate('create')}>
            <Image source={require('../assets/add.jpg')} style={{height:60,width:50}}/>
            </TouchableOpacity>
            <View style={{width:40}}/>
            <TouchableOpacity>
            <FontAwesome name='search' size={25} color='white'/>
            </TouchableOpacity>
        </View>
    )
}