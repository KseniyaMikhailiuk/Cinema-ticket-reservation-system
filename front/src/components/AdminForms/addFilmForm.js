import React from 'react'
import '../../CommonStylesheets/form.scss'
import './addFilmForm.scss'

const AddFilmForm = () => {
    return(
        <article className="forms admin">
            <form>
                <fieldset>
                    <input placeholder="Введите название" className="form-item admin__form-item"/>
                    <input className="form-item admin__form-item" type="date" />
                    <textarea
                        placeholder="Введите описание фильма"
                        className="form-item admin__form-item"
                        rows="10"
                        cols="30"
                    />
                    <input className="form-item admin__form-item" placeholder="Выберите постер" type="file"/>
                </fieldset>
            </form>
        </article>
    )
}
export default AddFilmForm;