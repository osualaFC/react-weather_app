import React, {useContext} from 'react'
import { SearchWeatherContext } from '../../contexts/SearchWeatherContext'


const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  }

const Location = () => {

    const { weather } = useContext(SearchWeatherContext)
    return (
    (typeof weather.main != "undefined") ? (
        <div className="location-box">
            <div className="location">{weather.name},{weather.sys.country} </div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
    ) : ('')
    )
}

export default Location
//