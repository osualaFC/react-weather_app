import React, {useContext} from 'react'
import { SearchWeatherContext } from '../../contexts/SearchWeatherContext'
import dateBuilder from '../../assests/js/DateBuilder'


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