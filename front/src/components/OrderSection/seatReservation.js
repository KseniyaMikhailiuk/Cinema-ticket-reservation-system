import React from 'react'
import HallPlan from './hallPlan'
//import OrderSettings from '.'

const SeatReservation = ({
    hallPlan
}) => {
    return(
        <sectoin>
            <HallPlan hallPlan={hallPlan}/>
            {/* <OrderSettings /> */}
        </sectoin>
    )
}

export default SeatReservation;