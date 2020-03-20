import React, {useContext } from 'react'
import { SearchWeatherContext } from '../../contexts/SearchWeatherContext'
import Home from '../Home/Home'


const Weather = () => {

const { weather } = useContext(SearchWeatherContext)
console.log(weather)
    return (
        (typeof weather.main != "undefined") ? (
        <div className="weather-box">
            <div className="temp">
            {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].description}</div>
        </div>
         ) : (<Home />)
    )
}

export default Weather
