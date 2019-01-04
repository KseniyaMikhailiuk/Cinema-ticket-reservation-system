import React from 'react'
import 'react-notifications/lib/notifications.css';
import Dialog from 'rc-dialog'
import Select from 'react-select';
import seatType from '../../Common/seatTypes'

const SeatTypeSelectDialog = ({
    isVisible,
    onClose,
    handleSeatTypeSelect,
    onSeatTypeSubmit,
    isLastSeat
}) => {
    var seatTypesForSelect = [];
    for (let element in seatType) {
        if (isLastSeat && element === seatType.loveseat.type) {
            continue;
        }
        seatTypesForSelect.push({value: element, label: element});
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
                onChange={(selectedOption) => handleSeatTypeSelect(selectedOption.label)}
                placeholder="Выберите тип места"
            />
            <button
                type="button"
                className="form-item"
                onClick={onSeatTypeSubmit}
            >
                Выбрать
            </button>
        </Dialog>
    )
}

export default SeatTypeSelectDialog;