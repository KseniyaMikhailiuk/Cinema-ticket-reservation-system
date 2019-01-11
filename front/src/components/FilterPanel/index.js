import React from 'react'
import NumericInput from 'react-numeric-input'
import {withNamespaces} from 'react-i18next'

import MainFilterPanel from '../Common/mainFilterPanel'

import '../../CommonStylesheets/formItems.scss'
import './filterPanel.scss'

const FilterPanel = ({
    filter,
    filterOptions,
    onFilterClick,
    t
}) => {
    const handleFreeSeatsSelect = (value) => {
        onFilterClick("freeSeats", value)
    }

    const freeSeatsFormat = (amount) => {
        return `${amount} ${t('free')}`
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
                placeholder={t('seats')}
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

export default withNamespaces()(FilterPanel);