import React from 'react'
import HallPlan from './hallPlan'
import OrderSettings from './orderSettings'

const SeatReservation = ({
    hallPlan
}) => {
    return(
        <sectoin className="order-form">
            <HallPlan hallPlan={hallPlan}/>
            <OrderSettings />
        </sectoin>
    )
}

export default SeatReservation;