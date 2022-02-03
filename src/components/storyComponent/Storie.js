import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Storie({imgUrl,name}) {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: imgUrl }}
                />
            </View>
            <Text style={styles.storyText}>
                {name} 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#ae22e0',
        borderWidth: 3,
        width:76,
        height:76,
        margin: 7,
        borderRadius: 100,
    },
    img: {
        height: 70,
        width: 70,
        resizeMode: 'contain',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 10
    },
    storyText:{
        textAlign: 'center',
        fontSize:16,
        fontWeight: '500',
    }
});
