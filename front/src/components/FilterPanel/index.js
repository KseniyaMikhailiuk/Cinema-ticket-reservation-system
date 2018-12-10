import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../CommonStylesheets/formItems.scss'
import './filterPanel.scss'

const today = new Date();
console.log(today);
var nextDay;
var dates = [];
for(var i = 0; i < 9; i++){
    nextDay = new Date(today.getYear(), today.getMonth(), today.getDate() + i);
    dates.push(nextDay.getDate() + '/' + nextDay.getMonth() + ' ' + nextDay.getDay());
}

const FilterPanel = ({
    filterOptions,
    onFilterClick
}) => {
    return(
        <section className="filter-panel">  
            <div className="filter-panel__group-container">
                <input className="form-item bordered" list="cities" placeholder="Выберите город"/>
                <datalist id="cities">
                    {filterOptions.cities.map(city =>
                        <option value={city.name} onClick={() => onFilterClick("cities", city.name)}/>                       
                    )}
                </datalist>

                <input className="form-item bordered" list="cinemas" placeholder="Выберите кинотеатр"/>
                <datalist id="cinemas">
                    {filterOptions.cities.map(city =>
                        city.cinemas.map(cinema =>
                            <option value={cinema} onClick={() => onFilterClick("cinemas", cinema)}>{city.name}</option>    
                        )
                    )}                    
                </datalist>
            </div>

            <div className="filter-panel__group-container">
                <input className="form-item bordered" list="date" placeholder="Выберите день"/>
                <datalist id="date">
                    {dates.map(date =>
                        <option value={date} onClick={() => onFilterClick("date", date)}/>  
                    )}
                </datalist>

                <input className="form-item bordered" list="cinemas" placeholder="Выберите кинотеатр"/>
                <datalist id="cinemas">
                    {filterOptions.cities.map(city =>
                        city.cinemas.map(cinema =>
                            <option value={cinema}>{city.name}</option>    
                        )
                    )}                    
                </datalist>
            </div>

        </section>
    )
}

export default FilterPanel;