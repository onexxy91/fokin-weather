import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loading({location}) {
    return <View style={styles.container}>
        <StatusBar barStyle={"dark-content"}/>
        <Text style={styles.locationText}>{location}</Text>
        <Text style={styles.text}>Welcome to the</Text>
        <Text style={styles.text}>Weather Fairy App!</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
        fontWeight: "500",
        justifyContent: "flex-start"
    },
    locationText: {
        color: "red",
        fontSize: 12
    }
})