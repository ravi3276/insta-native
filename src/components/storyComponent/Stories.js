import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Storie from './Storie';

const data = [
    {
        imgUrl:"https://images.pexels.com/photos/4385290/pexels-photo-4385290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name:"ravi"
    },
    {
        imgUrl:"https://images.pexels.com/photos/9657830/pexels-photo-9657830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name:"naveen"
    },
    {
        imgUrl:"https://images.pexels.com/photos/10414193/pexels-photo-10414193.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name:"veda"
    },
    {
        imgUrl:"https://images.pexels.com/photos/9879548/pexels-photo-9879548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name:"kiran"
    },
    {
        imgUrl:"https://images.pexels.com/photos/9546881/pexels-photo-9546881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name:"kavya"
    },
    {
        imgUrl:"https://images.pexels.com/photos/10303686/pexels-photo-10303686.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        name:"sherlyn"
    }
]

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        horizontal
        keyExtractor={({name})=>name}
        renderItem={({item})=><Storie imgUrl={item.imgUrl} name={item.name}/>}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
   
});
