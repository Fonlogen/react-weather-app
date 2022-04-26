import React from "react";
import { useState, useEffect } from "react";
import $ from "jquery";

// Importing Components
import SearchBar from "./components/SearchBar.js";
import WeatherShower from "./components/WeatherShower.js";
import Background from "./components/Background.js";

// Importing Style
import './style.css';

const API_KEY = '4cb31706d85965fd91919bb6167e9775';

// function searchWeather(city_name, cb) {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city_name + '&appid=' + API_KEY)
//     .then(response => response.json())
//     .then(data => { cb = data.weather[0].main; return cb; });
// }

const App = () => {
    const [city, setCity] = useState("Naples");
    const [weatherStatus, setWeatherStatus] = useState("Clear");

    useEffect(() => {
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=it' + '&appid=' + API_KEY,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                setWeatherStatus(data.weather[0].main);
            }
        });
    }, [city]);

    return (
        <>
        <h1>Benvenuto nell'App Meteo</h1>
        <SearchBar setCity={setCity}/>
        <WeatherShower weather={weatherStatus}/>
        <Background className="weather" bg={weatherStatus}></Background>
        </>
    );
}

export default App;