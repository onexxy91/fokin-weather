import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "85a699ed076aa9fe63e4783a30d7b2cd";

export default function App() {
  const [state, setState] = useState({
    isLoading: true,
    temp: null,
    condition: null,
    location: null
  });
  const [errorMsg, setErrorMsg] = useState(null);

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      console.log(data);
      setState({
        ...state,
        isLoading: false,
        temp: data.main.temp,
        condition: data.weather[0].main,
        location: data.name
       //condition: "Rain"
      })
  }

  getLocation = async() => {
    try {
    //  throw Error();
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    } catch (error) {
      Alert.alert(errorMsg);
    }
    let { 
      coords: { latitude, longitude }
     } = await Location.getCurrentPositionAsync();

    getWeather(latitude, longitude);
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (state.isLoading ? <Loading/> : 
  <Weather temp={Math.round(state.temp)} condition={state.condition} location={state.location}/>)
    
  
  
}

