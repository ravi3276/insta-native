import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Post from './Post';
import Stories from '../storyComponent/Stories';

const user = [
    {
    id:'1',
    imgURL: "https://images.pexels.com/photos/4385290/pexels-photo-4385290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "ravi_3276",
    postIMG: "https://images.pexels.com/photos/8090947/pexels-photo-8090947.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    likes: 34,
    uploadtime: 8,
    desc: "beauty of streets"
},
{
    id:'2',
    imgURL: "https://images.pexels.com/photos/4385290/pexels-photo-4385290.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "ravi_3276",
    postIMG: "https://images.pexels.com/photos/8090947/pexels-photo-8090947.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    likes: 32,
    uploadtime: 8,
    desc: "beauty of streets"
}
]

const PostComponent = () => {
    return (
        <View>
            <FlatList
                data={user}
                keyExtractor={({ id})=>id}
                ListHeaderComponent={Stories}
                renderItem={({ item }) => <Post 
                imgURL={item.imgURL} 
                name={item.name}
                 postIMG={item.postIMG}
                 likes={item.likes}
                 uploadtime={item.uploadtime}
                 desc={item.desc}
                 />}
            />
        </View>
    );
};

export default PostComponent;

const styles = StyleSheet.create({});
