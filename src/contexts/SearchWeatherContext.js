import React, {createContext, useState} from 'react'

export const SearchWeatherContext = createContext()

const api ={
  key : "134f9862ac5660133ae5d36a227aeda9",
  base :"https://api.openweathermap.org/data/2.5/"
}

const SearchWeatherProvider = (props) => {

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const handleChange =(e) =>{
    setQuery(e.target.value)  
  }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
  
    

    return (
     <SearchWeatherContext.Provider value={{query, weather, search, handleChange}}>
         {props.children}
     </SearchWeatherContext.Provider>
    )
}

export default SearchWeatherProvider

/**const api ={
    key : "2913badb217fe904da85ef3df172ce79",
    base :"http://api.weatherstack.com/current"
  }
 * 
 * 
    fetch(`${api.base}?access_key=${api.key}$query=${query}&units=m`)
  }
 */