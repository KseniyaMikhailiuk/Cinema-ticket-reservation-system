import React from 'react'
import '../../CommonStylesheets/formItems.scss'
import './filterPanel.scss'
import DatePickerCustomized from './datePicker'


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
            <div className="filter-panel__group-container">
                <input className="form-item bordered" 
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
                <input className="form-item bordered" 
                    list="cinema" 
                    placeholder="Выберите кинотеатр"
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
                    <DatePickerCustomized 
                        selectedDate={filter.date}
                        onFilterClick={onFilterClick}                       
                    />
                </div>
                <input className="form-item bordered" 
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
            </div>
        </section>
    )
}

export default FilterPanel;