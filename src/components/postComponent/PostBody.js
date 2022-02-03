import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PostBody = ({postIMG}) => {
  return (
    <View>
      <Image style={styles.img} source={{uri:postIMG}}/>
    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
    img:{
        height:Dimensions.get('window').width,
        width:Dimensions.get('window').width,
        // resizeMode:'contain'
    }
});
