import React from 'react'
import MainFilterPanel from '../Common/mainFilterPanel';
import NumericInput from 'react-numeric-input'

const AddSeanceForm = ({
    filter,
    filterOptions,
    changeFilterObjectItem
}) => {
    const handleInputChange = (event) => {
        changeFilterObjectItem(event.target.list.id, event.target.value);
    }

    const moneyFormat = (value) => {
        return value + ' BYN'
    }

    return(
        <article className="forms admin">
            <form>
                <fieldset>
                    <legend className="form-item forms__legend">
                        Добавить сеанс
                    </legend>
                    <MainFilterPanel filter={filter} filterOptions={filterOptions} onFilterClick={changeFilterObjectItem}/>
                    <input className="form-item"
                        list="hallNumbers"
                        placeholder="Выберите зал"
                        onChange={handleInputChange}
                        required/>
                    <datalist id="hallNumbers">
                        {
                            filterOptions
                            .cities
                            .filter(city => city.name === filter.city)
                            .map(city => city.cinemas
                                .map(cinema => cinema.halls
                                    .map(hall =>
                                        <option value={hall}>{cinema.name}</option>
                                    )
                                )
                            )
                        }
                    </datalist>
                    <input className="form-item" type="time" required/>
                    <NumericInput
                        className="form-item"
                        min={1}
                        max={100}
                        placeholder="Цена билета"
                        format={moneyFormat}
                        required
                    />
                </fieldset>
            </form>
        </article>
    )
}
export default AddSeanceForm;