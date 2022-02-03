import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { Icon } from 'react-native-elements';

const PostFooter = ({likes,desc,uploadtime,name}) => {
    const [isLiked, setisLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(likes);

    const likeBtn=() => {
        setLikesCount(isLiked ? likes-- : likes+1);
        setisLiked(!isLiked);
    }
  return (
    <View style={styles.container}>

        <View style={styles.postActions}>
        <View style={styles.postActionLeft}>
            <TouchableWithoutFeedback onPress={likeBtn}>
            {
                isLiked ?
                <Icon name='heart' type='antdesign' size={30} color={'red'}/>
                :
                <Icon name='hearto' type='antdesign' size={30}/>
            }
            </TouchableWithoutFeedback>
            <Icon name='message-circle' type='feather' size={30}/>
            <Icon name='paper-plane-outline' type='ionicon' size={30}/>
        </View>
        <View>
        <Icon name='bookmark' type='feather' size={30}/>
        </View>
        </View>

      <Text style={styles.likes}>{likesCount} likes</Text>
      <Text style={styles.likes}>
            <Text style={styles.name}>{name} </Text>
          {desc}
      </Text>
      <Text style={styles.time}>{uploadtime} minutes ago</Text>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
    container: {
        margin:5,
    },
    postActions:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:5,
        paddingVertical:2,
    },
    postActionLeft:{
        flexDirection:'row',
        alignItems: 'center',
        width:130,
        justifyContent: 'space-around',
        color: '#545454'
    },
    likes: {
        marginTop:3,
        fontSize:16,
        fontWeight: '500',
    },
    name:{
        fontSize:18,
        marginRight:5,
    },
    time: {
        marginTop:3,
        fontSize:14,
        color: 'grey'
    }
});
