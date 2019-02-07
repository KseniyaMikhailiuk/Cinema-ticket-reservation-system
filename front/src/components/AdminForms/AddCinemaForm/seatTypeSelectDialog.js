import React from 'react'
import Select from 'react-select';
import Dialog from 'rc-dialog'
import {withNamespaces} from 'react-i18next'

import 'rc-dialog/assets/index.css'

const SeatTypeSelectDialog = ({
    isVisible,
    onClose,
    handleSeatTypeSelect,
    onSeatTypeSubmit,
    isLastSeat,
    seatTypeOptions,
    t
}) => {
    var seatTypesForSelect = [];
    for (let element of seatTypeOptions) {
        if (isLastSeat && element.widthScale > 1) {
            continue;
        }
        seatTypesForSelect.push({
            value: element,
            label: element.name
        });
    }
    return (
        <Dialog
            visible={isVisible}
            visible
            onClose={onClose}
            maskAnimation="fade"
            animation="zoom"
            closable
        >
            <p>Тип места</p>
            <Select
                name="seatType"
                className="select"
                options={seatTypesForSelect}
                isSearchable
                isClearable
                onChange={(selectedOption) => handleSeatTypeSelect(selectedOption.value)}
                placeholder={t('selectSeatType')}
            />
            <button
                type="button"
                className="form-item"
                onClick={onSeatTypeSubmit}
            >
                {t('select')}
            </button>
        </Dialog>
    )
}

export default withNamespaces()(SeatTypeSelectDialog);