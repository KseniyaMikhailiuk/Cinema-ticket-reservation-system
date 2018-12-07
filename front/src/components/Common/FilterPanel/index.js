import React from 'react'
import '../../../CommonStylesheets/formItems.scss'
import './filterPanel.scss'

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
                        <option value={city.name} />  
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

            <div className="filter-panel__group-container">
                <input className="form-item bordered" list="cities" placeholder="Выберите город"/>
                <datalist id="cities">
                    {filterOptions.cities.map(city =>
                        <option value={city.name} />  
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