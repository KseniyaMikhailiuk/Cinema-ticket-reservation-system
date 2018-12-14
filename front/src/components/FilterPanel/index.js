import React from 'react'
import '../../CommonStylesheets/formItems.scss'
import './filterPanel.scss'
import DatePickerCustomized from './datePicker'


const FilterPanel = ({
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
                    placeholder="Выберите город"
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
                        onFilterClick={onFilterClick}                       
                    />
                </div>
                <input className="form-item bordered" list="cinema" placeholder="Выберите кинотеатр"/>
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