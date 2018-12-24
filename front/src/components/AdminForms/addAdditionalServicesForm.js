import React from 'react'
import NumericInput from 'react-numeric-input'

const AddAdditionalServicesForm = () => {
    const moneyFormat = (value) => {
        return value + ' BYN'
    }
    return (
        <article className="forms admin">
            <form>
                <fieldset>
                    <legend className="form-item forms__legend">
                        Добавить дополнительные услуги
                    </legend>
                    <input placeholder="Введите название" className="form-item admin__form-item"/>
                    <NumericInput
                        className="form-item"
                        min={1}
                        max={100}
                        placeholder="Цена услуги"
                        format={moneyFormat}
                        required
                    />
                </fieldset>
                <input className="form-item forms__button bordered" value="Добавить" type="submit"></input>
            </form>
        </article>
    )
}

export default AddAdditionalServicesForm;