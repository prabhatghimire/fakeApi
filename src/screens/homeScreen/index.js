import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {UserContext} from '../../../App';
import {styles} from './style';
import {LoadingScreen} from '../../components/LoadingScreen';

export const HomeScreen = ({navigation}) => {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);

  const getPost = () => {
    fetch(`http://fakeapi.jsonparseronline.com/users?_page=${page + 1}`)
      .then(response => response.json())
      .then(json => {
        setPost(post.concat(json));
      });
    setPage(page + 1);
  };

  const {user} = useContext(UserContext);
  useEffect(() => {
    getPost();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{item.email}</Text>
      <Text>{item.username}</Text>
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
          onPress={() => navigation.navigate('ImageView')}>
          <Text>Images</Text>
        </TouchableOpacity>
        <Text>{user.email}</Text>
      </View>
      <FlatList
        ListEmptyComponent={LoadingScreen}
        data={post}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.1}
        onEndReached={getPost}
      />
    </View>
  );
};
