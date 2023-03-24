
import {StyleSheet, SafeAreaView, Text, } from 'react-native';
import AddContent from '../components/addContent';
import Swipper from '../components/swipper';
import SocialShare from '../components/socialShare';
import BSocialLink from '../components/bsocial_link';


export default function Create() {

    return (
        <SafeAreaView  style={styles.container}>
            <Text style={{fontSize:20,color:'white',marginTop:20}}>Create</Text>
            <Text style={styles.text}>
            Swipe to pick which 
            type of content you want
            to create for your audience
             </Text>
           <Swipper />
           <AddContent />
           <SocialShare/>
           <BSocialLink />
          </SafeAreaView>
    );
    }
    const styles = StyleSheet.create({
       container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#040404',
       },
       text:{
        fontSize:14,
        width:250,
        color:'white',
        fontWeight:'bold',
        marginTop:15
       }
      
      });
      