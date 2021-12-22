import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import { UserContext } from '../../../App';
import {styles} from './style';
import { LoadingScreen } from '../../components/LoadingScreen';

export const ImageViewScreen = ({navigation}) => {
  const [post, setPost] = useState([]);

  const getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPost(json));
  };
  useEffect(() => {
    getPhotos();
    // console.log(post);
  }, []);

  const {user} = useContext(UserContext)
  const renderItem = ({item}) => (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.url,
        }}
      />
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text>Posts</Text>
        </TouchableOpacity>
        <Text>{user.email}</Text>
      </View>
      <FlatList
        data={post}
        ListEmptyComponent={ LoadingScreen}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={1}
        onEndReached={() => {}}
      />
    </View>
  );
};
