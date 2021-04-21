import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#928dab", "#00d2ff"],
        title: "구름",
        subTitle: "대체적으로 맑으나 구름이 있음!"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#1e3c72", "#2a5298"],
        title: "천둥번개",
        subTitle: "번개 맞지않도록 조심하세요!"
    }, 
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#1a2980", "#26d0ce"],
        title: "이슬비",
        subTitle: "부슬부슬 이슬비가 내려요!"
    }, 
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#314755", "#26a0da"],
        title: "비 rain",
        subTitle: "비소식! 우산챙겨 나가기 T_T"
    }, 
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#a7bfe8", "#6190e8"],
        title: "눈 snow",
        subTitle: "흰눈 사이로 썰매를타고 ㅋㅋ"
    }, 
    Atmosphere: {
        iconName: "weather-cloudy",
        gradient: ["#4DA0B0", "#D39D38"]
    }, 
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "맑음",
        subTitle: "맑고 깨끗한 날씨!"
    }, 
    Haze:{
        iconName: "weather-fog",
        gradient: ["#f0f2f0", "#000c40"],
        title: "안개",
        subTitle: "안개가 있어요!"

    },
    Mist:{
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "안개",
        subTitle: "안개가 있어요!"
    }, 
    Smoke:{
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "안개",
        subTitle: "안개가 있어요!"
    }, 
    Dust:{
        iconName: "weather-tornado",
        gradient: ["#403b4a", "#e7e9bb"],
        title: "먼지",
        subTitle: "먼지가 심하니 마스크챙기기!"
    }, 
    Fog:{
        iconName: "weather-fog",
        gradient: ["#b993d6", "#8ca6db"],
        title: "안개",
        subTitle: "안개가 있어요!"
    }
};


export default function Weather({ temp, condition, location }) {
    return <LinearGradient style={styles.container}
        colors={weatherOptions[condition].gradient} >
            <StatusBar barStyle={'light-content'}></StatusBar>
        <View style={styles.halfContainer}>
            <Text style={styles.temp}>{location}</Text>
            <MaterialCommunityIcons 
                name={weatherOptions[condition].iconName} 
                size={96} 
                color="white" />
            <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title} </Text>
            <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
        </View>
        </LinearGradient>
    
    
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds", 
        "Haze",
        "Mist", 
        "Smoke", 
        "Dust", 
        "Fog"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    temp: {
        fontSize: 42,
        color:"white"
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    }
})

