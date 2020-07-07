import React from 'react'
import '../scss/layout/splash.scss'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchBar from './search_bar/search_bar'

class Splash extends React.Component{
  render () {
    return (
        <div>
          <SearchBar/>
        </div>
    );
  }
}


export default Splash