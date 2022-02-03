import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Discovery = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}>Discovery</Text>
    </View>
  );
};

export default Discovery;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
