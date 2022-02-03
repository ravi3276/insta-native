import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const PostHeader = ({ imgURL, name }) => {
    return (
        <View style={styles.containerTop}>
            <View style={styles.postProf}>
            <View style={styles.container}>
                <Image style={styles.img}
                    source={{ uri: imgURL }}
                />
            </View>
            <Text style={styles.postText}>{name}</Text>
            </View>
            <Icon 
             name='more-vert'
             type='MaterialIcons'
             size={25}
            />
        </View>
    );
};

export default PostHeader;

const styles = StyleSheet.create({
    containerTop:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:7,
    },
    postProf:{
        flexDirection:'row',
        alignItems: 'center',
    },
    container: {
        borderColor: '#ae22e0',
        borderWidth: 2,
        width: 46,
        height:46,
        margin: 5,
        borderRadius: 100,
    },
    img: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 10
    },
    postText:{
        fontSize:18,
        fontWeight: '500',
        color: '#262424',
    }
});
