import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

class DatePickerCusomized extends DatePicker {
    constructor(props) {
        super(props);
        this.state = {
          selectedDate: new Date()
        };
        this.handleDayChange = this.handleDayChange.bind(this);
    }

    handleDayChange(date) {
        this.setState({
            selectedDate: date
        });
        const {onFilterClick, target} = this.props;
        console.log(target)
        onFilterClick(target, date);
    }

    render() {
        const {selectedDate} = this.state
        return (
            <DatePicker
                name="time"
                className="form-item"
                minDate={new Date()}
                selected={selectedDate}
                onChange={this.handleDayChange}
                autoComplete="off"
            />
        )
    }
}

export default DatePickerCusomized;