import { Image, TouchableOpacity, FlatList } from 'react-native';

export default function ContentCard() {
  const thumbnails = [
    require('../assets/img1.png'),
    require('../assets/img2.png'),
    require('../assets/img3.png'),
    require('../assets/img4.png'),
    require('../assets/img5.png'),
    require('../assets/img6.png'),
    require('../assets/img7.png'),
    require('../assets/img8.png'),
    require('../assets/img9.png'),
    require('../assets/img10.png'),
    require('../assets/img11.png'),
    require('../assets/img12.png'),
  ];

  const renderThumbnail = ({ item }) => (
    <TouchableOpacity style={{paddingHorizontal:5,paddingVertical:7}}>
      <Image 
        source={item}
        style={{ height: 180, width: 123 }}
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={thumbnails}
      renderItem={renderThumbnail}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      showsHorizontalScrollIndicator={false}
      
    />
  );
}
