import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

export default function Tabs() {
  const tabs = ['All', 'Laughs', 'Battle', 'Comedy', 'Gossip'];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'center',
        paddingVertical:5,
      }}>
      {tabs.map((tab, index) => (
        <TouchableOpacity key={index} onPress={() => setActiveTab(index)}>
          <View
            style={{
              width: 75,
              height: 35,
              backgroundColor: activeTab === index ? 'white' : '#1c1a1b',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
              margin: 10,
            }}>
            <Text style={{textAlign: 'center', color:activeTab === index ? 'black' : 'grey'}}>{tab}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
