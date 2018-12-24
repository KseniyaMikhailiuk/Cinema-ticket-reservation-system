import React from 'react'
import MainFilterPanel from '../Common/mainFilterPanel';

const AddSeanceForm = ({
    filter,
    filterOptions,
    changeFilterObjectItem
}) => {
    return(
        <article className="forms admin">
            <form>
                <MainFilterPanel filter={filter} filterOptions={filterOptions} onFilterClick={changeFilterObjectItem}/>
                <input className="form-item" type="time" />
            </form>
        </article>
    )
}
export default AddSeanceForm;