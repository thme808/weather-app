import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>getting the weather...</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, //take all space available
        backgroundColor: '#FDF6AA',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 100,
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30,
    }
})

export default Loading;