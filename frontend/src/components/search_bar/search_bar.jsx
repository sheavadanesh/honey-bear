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
                <div className="explore-container">
                  <div className="explore-text">
                      Don't know what you're looking for?  Explore all options (Link this to index page)
                  </div>
                </div>
              </form>
            </div>
            <div className="information-parent-container">
              <div className="information-header">
                <h2>Don't pull out a second mortgage to<br/> get camping gear!</h2>
              </div>
              <div className="information-container">
                {/* <div classname="information-text"> */}
                  <div className="blurb">
                  <img src="https://www.moneycrashers.com/wp-content/uploads/2019/09/camping-essentials-1068x713.jpg" 
                  alt="borrow"/>
                  <br/>
                  <h3>Borrow</h3>
                  <br/>
                  <p>Don't want to fork over your paycheck to try out new gear?
                    Borrow from your friends!
                  </p>
                  </div>
                <div className="blurb">
                  <img src="https://platform.nashvilleparent.com/media/campfire%20marhmallows.jpg" 
                  alt="borrow"/>
                  <br/>
                  <h3>Rent</h3>
                  <br/>
                  <p>Tired of watching your gear collect dust?  Make money renting
                    it out to your community
                  </p>
                  </div>
                <div className="blurb">
                  <img src="https://www.northeastohioparent.com/wp-content/uploads/2018/07/bigstock-Family-With-Friends-Camp-By-La-243160192.jpg" 
                  alt="borrow"/>
                  <br/>
                    <h3>Enjoy the outdoors</h3>
                    <br/>
                    <p>Unplug and relax in the wilderness without thinking about
                    the cost</p>
                  </div>
                {/* </div> */}
              </div>
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
