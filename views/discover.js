import { SafeAreaView, View, TextInput, ScrollView } from "react-native";
import Tabs from '../components/tabs';
import ContentCard from '../components/contentCard';
import BottomTabs from '../components/bottomtabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import {Divider} from 'react-native-elements';

export default function Discover({navigation}){

    return(
        <SafeAreaView style={{
            paddingTop:40,
            flex:1,
            backgroundColor:'#040404',
        }}>
            <ScrollView>

            <View style={{alignItems:'center'}}>
                <View style={{
                    width:350,
                    padding:7,
                    backgroundColor:'#1c1a1b',
                    borderRadius:15,
                    flexDirection:'row',
                    margin:5,
                    paddingHorizontal:5
                }}>
                    <FontAwesome name='search' size={25} color='grey'/>
                    <View style={{width:10}}/>
                    <TextInput 
                        placeholder="Discover & search content"
                        placeholderTextColor= 'grey'
                    />
                </View>
                <Tabs />
               <ContentCard />
            </View>
            </ScrollView>
               <Divider width={1}/>
               <BottomTabs navigation={navigation} />
        </SafeAreaView>
    )
}
