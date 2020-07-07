import React from 'react'
import '../scss/layout/splash.scss'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Splash extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: '',
      startDate: null,
      endDate: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(e){
    this.setState({ search: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state)
  }

  render () {
    return (
        
      <div className="search-form-parent">
        <div className="search-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="input-gear">
              <label className="gear-label">Gear
                <input
                  className="input--style-1"
                  type="text"
                  placeholder="What are you looking for?"
                  name="gear"
                />
              </label>
            </div>
            <div className="date-range">
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
            </div>
            <button className="gear-submit" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}


export default Splash