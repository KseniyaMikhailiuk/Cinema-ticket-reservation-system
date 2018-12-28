import React from 'react'
import DatePickerCustomized from './datePicker'

const MainFilterPanel = ({
    filter,
    filterOptions,
    onFilterClick,
    handleInputChangeAdmin
}) => {
    const handleInputChange = (event) => {
        onFilterClick(event.target.list.id, event.target.value);
        if (typeof handleInputChangeAdmin === 'function'){
            handleInputChangeAdmin(event);
        }
    }

    return (
        <>
            <input
                name="city"
                className="form-item"
                list="city"
                placeholder="Выберите город"
                value={filter.city}
                onChange={handleInputChange}
                required/>
            <datalist id="city">
                {
                    filterOptions
                        .cities
                        .map(city =>
                            <option value={city.name}/>
                        )
                }
            </datalist>

            <input
                name="cinema"
                className="form-item"
                list="cinema"
                placeholder="Выберите кинотеатр"
                onChange={handleInputChange}
                required/>
            <datalist id="cinema">
                {
                    filterOptions
                        .cities
                        .filter(city => city.name === filter.city)
                        .map(city => city.cinemas
                                .map(cinema =>
                                    <option value={cinema.name}>{city.name}</option>
                                )
                        )
                }
            </datalist>

            <div className="form-item">
                <DatePickerCustomized
                    selectedDate={filter.date}
                    onFilterClick={onFilterClick}
                    handleInputChangeAdmin={handleInputChangeAdmin}
                />
            </div>

            <input
                name="filmName"
                className="form-item"
                list="filmName"
                placeholder="Выберите фильм"
                onChange={handleInputChange}
                required/>
            <datalist id="filmName">
                {
                    filterOptions
                        .filmNames
                        .map(filmName =>
                            <option value={filmName}></option>
                        )
                }
            </datalist>
        </>
    )
}

export default MainFilterPanel;