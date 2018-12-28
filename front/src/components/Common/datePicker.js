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
        const {handleInputChangeAdmin} = this.props
        if (typeof handleInputChangeAdmin === 'function'){
            handleInputChangeAdmin({target: {name: "date", value: date}})
        }
        this.setState({
            selectedDate: date
        });
        const {onFilterClick} = this.props;
        onFilterClick("date", date);
    }

    render() {
        const {selectedDate} = this.props
        return (
            <DatePicker
                name="time"
                className="form-item"
                minDate={new Date()}
                selected={selectedDate}
                onChange={this.handleDayChange}
            />
        )
    }
}

export default DatePickerCusomized;