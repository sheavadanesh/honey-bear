import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom"

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      startDate: null,
      endDate: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state);
    this.props.history.push('/items');
  }

  render() {
    return (
      <div>
        <div className="splash-parent">
          <div className="search-form-parent">
            <div className="search-form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="input-gear">
                  <label className="gear-label">
                    Gear
                    <input
                      onChange={this.update}
                      className="input--style-1"
                      type="text"
                      placeholder="What are you looking for?"
                      name="gear"
                      value={this.state.title}
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
                    onFocusChange={(focusedInput) =>
                      this.setState({ focusedInput })
                    } // PropTypes.func.isRequired,
                  />
                </div>
                <button
                  disabled={this.state.title.length < 2}
                  className="gear-submit"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-contents">
            <div className="footer-items">
              <div className="copyright">© 2020</div>
              <div>
                <Link to="/engineers" className="meet-engineers">
                  Meet the Engineers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
