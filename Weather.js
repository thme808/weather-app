import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ temp, location, weather }) {
    const { main, description, icon } = weather;
    //dynamically inject key value
    const { [main]: { iconName, color, size, gradient } } = weatherIconMap;
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color} />
                <Text style={styles.tempText}>{temp}°</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{description}</Text>
                <Text style={styles.subtitle}>{location}</Text>
            </View>
        </LinearGradient>
    )
}

const weatherIconMap = {
    Clear: {
        iconName: "weather-sunny",
        color: "white",
        size: 96,
        gradient: ["#4DA0B0", "#D39D38"],
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        color: "white",
        size: 96,
        gradient: ["#373B44", "#4286f4"],
    },
    Rain: {
        iconName: "weather-pouring",
        color: "white",
        size: 96,
        gradient: ["#00C6FB", "#005BEA"],
    },
    Snow: {
        iconName: "weather-snowy",
        color: "white",
        size: 96,
        gradient: ["#7DE2FC", "#B9B6E5"],
    },
    Clouds: {
        iconName: "weather-cloudy",
        color: "white",
        size: 96,
        gradient: ["#D7D2CC", "#304352"],
    },
    Haze: {
        iconName: "weather-hazy",
        color: "white",
        size: 96,
        gradient: ["#4DA0B0", "#D39D38"],
    },
    Mist: {
        iconName: "weather-fog",
        color: "white",
        size: 96,
        gradient: ["#4DA0B0", "#D39D38"],
    },
    Fog: {
        iconName: "weather-fog",
        color: "white",
        size: 96,
        gradient: ["#4DA0B0", "#D39D38"],
    },
    Tornado: {
        iconName: "weather-tornado",
        color: "white",
        size: 96,
        gradient: ["#00C6FB", "#005BEA"],
    },
    Drizzle: {
        iconName: "weather-rainy",
        color: "white",
        size: 96,
        gradient: ["#00C6FB", "#005BEA"],
    },
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    halfContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },

    textContainer: {
        flex: 1,
        alignItems: "flex-start",
        paddingHorizontal: 40,
        paddingVertical: 40,
    },
    tempText: {
        fontSize: 45,
        fontWeight: "300",
        color: "white",
        marginBottom: 10,
        textAlign: "left",
    },
    title: {
        color: "white",
        fontSize: 38,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left",
    },
    subtitle: {
        color: "white",
        fontSize: 28,
        fontWeight: "600",
        textAlign: "left",
    },

});

Weather.propTypes = {
    temp: propTypes.number.isRequired,
} 