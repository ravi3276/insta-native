import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PostFooter from './PostFooter';
import PostBody from './PostBody';
import PostHeader from './PostHeader';

const Post = ({imgURL,name,postIMG,likes,uploadtime,desc}) => {
  return (
    <View>
      <PostHeader imgURL={imgURL} name={name}/>
      <PostBody postIMG={postIMG}/>
      <PostFooter likes={likes} uploadtime={uploadtime} desc={desc} name={name}/>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
