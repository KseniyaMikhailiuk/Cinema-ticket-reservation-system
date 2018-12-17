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
        const {onFilterClick} = this.props;
        onFilterClick("date", date);
    }

    render() {
        const {selectedDate} = this.props
        return (
            <DatePicker className="form-item"
                minDate={new Date()}
                selected={selectedDate}
                onChange={this.handleDayChange}                         
            />
        )
    }
}

export default DatePickerCusomized;