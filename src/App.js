import React from 'react';
import Search from './components/search-box/search'
import Location from './components/Location/Location'
import Weather from './components/Weather/Weather'
import SarchWeatherProvider from './contexts/SearchWeatherContext'


function App() {
  
  return (
    <div className="app">
      <SarchWeatherProvider>
        <main>
          <Search />
          <Location />
          <Weather  />
        </main>
      </SarchWeatherProvider>
    </div>
  );
}

export default App;
