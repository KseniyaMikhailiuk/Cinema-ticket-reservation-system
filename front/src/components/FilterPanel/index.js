import React from 'react'
import '../../CommonStylesheets/formItems.scss'
import './filterPanel.scss'
import NumericInput from 'react-numeric-input'
import MainFilterPanel from '../Common/mainFilterPanel'

const FilterPanel = ({
    filter,
    filterOptions,
    onFilterClick
}) => {
    const handleFreeSeatsSelect = (value) => {
        onFilterClick("freeSeats", value)
    }

    const freeSeatsFormat = (amount) => {
        return amount + ' свободно'
    }

    return (
        <section className="filter-panel">

            <MainFilterPanel
                filter={filter}
                filterOptions={filterOptions}
                onFilterClick={onFilterClick}
            />

            <NumericInput
                className="form-item"
                min={1}
                max={100}
                placeholder="Места"
                format={freeSeatsFormat}
                onChange={valueAsNumber =>
                    handleFreeSeatsSelect(
                        valueAsNumber
                    )
                }
            />
        </section>
    )
}

export default FilterPanel;