import React from 'react'
import HallPlan from './hallPlan'
import OrderSettings from './orderSettings'

const SeatReservation = ({
    hallPlan,
    onSeatSelect, 
    orderInfo
}) => {
    return (
        <sectoin className="order-form">
            <HallPlan hallPlan={hallPlan} onSeatSelect={onSeatSelect}/>
            <OrderSettings orderInfo={orderInfo} />
        </sectoin>
    )
}

export default SeatReservation;