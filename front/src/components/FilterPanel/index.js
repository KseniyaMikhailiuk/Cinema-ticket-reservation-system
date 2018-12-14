import React from 'react'
import '../../CommonStylesheets/formItems.scss'
import './filterPanel.scss'
import DatePickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import filterInputContent from './filterPanelDB'


const FilterPanel = ({
    filterOptions,
    onFilterClick
}) => {
    const handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
        const input = dayPickerInput.getInput();
        onFilterClick("date", selectedDay);
    }

    const handleInputChange = (event) => {
        onFilterClick(event.target.list.id, event.target.value);
    }

    return (
        <section className="filter-panel">  
            <div className="filter-panel__group-container">
                <input className="form-item bordered" 
                    list="city" 
                    placeholder={filterInputContent.city}
                    onChange={handleInputChange}/>
                <datalist id="city">
                    {
                        filterOptions
                        .cities
                        .map(city =>
                            <option value={city.name}/>                       
                        )
                    }
                </datalist>
                <input className="form-item bordered" 
                    list="cinema" 
                    placeholder={filterInputContent.cinema}
                    onChange={handleInputChange}/>
                <datalist id="cinema">
                    {
                        filterOptions
                            .cities
                            .map(city =>
                                city
                                    .cinemas
                                    .map(cinema =>
                                        <option value={cinema}>{city.name}</option>    
                                    )
                            )
                    }                    
                </datalist>
            </div>
            <div className="filter-panel__group-container">
                <div className="form-item bordered">
                    <DatePickerInput value={new Date()} />
                </div>
                <input className="form-item bordered" list="cinema" placeholder={filterInputContent.cinema}/>
                <datalist id="cinema">
                    {
                        filterOptions
                            .cities
                            .map(city =>
                                city
                                    .cinemas
                                    .map(cinema =>
                                        <option value={cinema}>{city.name}</option>    
                                    )
                            )
                    }                    
                </datalist>
            </div>
        </section>
    )
}

export default FilterPanel;