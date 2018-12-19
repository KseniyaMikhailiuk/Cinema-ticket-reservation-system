import React from 'react'
import '../../CommonStylesheets/formItems.scss'
import './filterPanel.scss'
import DatePickerCustomized from './datePicker'
import NumericInput from 'react-numeric-input'


const FilterPanel = ({
    filter,
    filterOptions,
    onFilterClick
}) => {
     const handleInputChange = (event) => {
        onFilterClick(event.target.list.id, event.target.value);
    }

    return (
        <section className="filter-panel">  

                <input className="form-item" 
                    list="city" 
                    value={filter.city}
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
                <input className="form-item" 
                    list="cinema" 
                    placeholder="Выберите кинотеатр"
                    onChange={handleInputChange}/>
                <datalist id="cinema">
                    {
                        filterOptions
                            .cities
                            .filter(city => city.name === filter.city)
                            .map(city =>
                                city
                                    .cinemas
                                    .map(cinema =>
                                        <option value={cinema}>{city.name}</option>    
                                    )
                            )
                    }                    
                </datalist>

                <div className="form-item">
                    <DatePickerCustomized 
                        selectedDate={filter.date}
                        onFilterClick={onFilterClick}                       
                    />
                </div>
                <input className="form-item" 
                    list="filmName" 
                    placeholder="Выберите фильм"
                    onChange={handleInputChange}/>
                <datalist id="filmName">
                    {
                        filterOptions
                            .filmNames
                            .map(filmName =>
                                <option value={filmName}></option>
                            )
                    }                    
                </datalist>

                <NumericInput className="form-item" min={0} max={100} value={0}/>

        </section>
    )
}

export default FilterPanel;