import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class DatePickerCusomized extends DatePicker {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleDayChange = this.handleDayChange.bind(this);
    }

    handleDayChange (date) {
        this.setState({
            startDate: date
        });
        const {onFilterClick} = this.props;
        onFilterClick("date", date);
    }

    render() {
        return <DatePicker className="form-item"
            minDate={new Date()}
            selected={new Date()}
            onSelect={this.handleDayChange}                         
        />
    }
}

export default DatePickerCusomized;