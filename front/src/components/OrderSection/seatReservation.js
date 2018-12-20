import React from 'react'
import HallPlan from './hallPlan'
import OrderSettings from './orderSettings'

const SeatReservation = ({
    hallPlan,
    seatsInfo,
    onSeatSelect,
    orderInfo,
    onCancelOrderItemClick
}) => {
    return (
        <sectoin className="order-form">
            <HallPlan hallPlan={hallPlan} seatsInfo={seatsInfo} onSeatSelect={onSeatSelect}/>
            <OrderSettings orderInfo={orderInfo} onCancelOrderItemClick={onCancelOrderItemClick}/>
        </sectoin>
    )
}

export default SeatReservation;