import React from 'react'
import {withNamespaces} from 'react-i18next'

import DatePickerCustomized from './datePicker'

const MainFilterPanel = ({
    filter,
    filterOptions,
    onFilterClick,
    handleInputChangeAdmin,
    t
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
                placeholder={t('selectCity')}
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
                placeholder={t('selectCinema')}
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
                />
            </div>

            <input
                name="filmName"
                className="form-item"
                list="filmName"
                placeholder={t('selectFilm')}
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

export default withNamespaces()(MainFilterPanel);