import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {styles} from './style';

export const HomeScreen = () => {
  const [post, setPost] = useState({});

  const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPost(json));
  };
  useEffect(() => {
    getPost();
    // console.log(post);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
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
