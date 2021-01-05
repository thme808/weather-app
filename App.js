import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading.js';
import * as Location from "expo-location";
import Axios from "axios";
import Weather from './Weather.js';

const API_KEY = '8ca28b5a7263fde260989b553099ee30';
export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0,
    weather: null,
    location: "",
  }

  getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    const { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync();
    this.getWeather(longitude, latitude);
  }

  getWeather = async (longitude, latitude) => {
    const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const { data:
      {
        name
        , main: { temp }
        , weather
      }
    } = await Axios.get(weatherApiUrl)
    this.setState({ isLoading: false, temp: temp, location: name, weather: weather[0] })
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, location, weather } = this.state;
    return isLoading ? <Loading />
      : <Weather temp={Math.round(temp)} weather={weather} location={location} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});