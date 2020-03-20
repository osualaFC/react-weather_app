import React, { useContext } from 'react'
import  { SearchWeatherContext } from '../../contexts/SearchWeatherContext'



function Search() {

  const { search, query, handleChange } = useContext(SearchWeatherContext)

    return (
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={handleChange}
            value={query}
            onKeyPress={search}
          />
        </div>
    )
}

export default Search
