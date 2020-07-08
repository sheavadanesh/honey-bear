import React from 'react'
import '../scss/layout/searchbar.scss'
import '../scss/layout/splash.scss'
import SearchBar from './search_bar/search_bar'

class Splash extends React.Component{
  render () {
    
    return (
      <div className="splash-parent">
        <SearchBar />
      </div>
    );
  }
}


export default Splash