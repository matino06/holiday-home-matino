import React, { Component } from 'react';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
        };
        this.datesChangeHandler=this.datesChangeHandler.bind(this)
    }
//moment("6 10 2020")
    datesChangeHandler(newStartDate, newEndDate) {
        this.setState({ startDate: moment(newStartDate), endDate: moment(newEndDate) });
        console.log(String(this.state.startDate))
        console.log(String(this.state.endDate))
    }

    render() {
        return(
            <div>
                <DateRangePicker
                    minimumNights={3}
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId={this.state.startDate} // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId= {this.state.endDate} // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.datesChangeHandler(startDate, endDate)} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
            </div>
        )
    }
}



export default DatePicker;