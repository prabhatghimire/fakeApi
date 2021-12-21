import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {styles} from './style';

export const ImageViewScreen = () => {
  const [post, setPost] = useState({});

  const getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPost(json));
  };
  useEffect(() => {
    getPhotos();
    // console.log(post);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.imageStyle}
      source=
      {{
        uri: item.url,
      }}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={post}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={1}
        // onEndReached
      />
    </View>
  );
};