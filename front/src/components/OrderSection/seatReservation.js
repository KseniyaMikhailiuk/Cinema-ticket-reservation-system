import React from 'react'
import HallPlan from './hallPlan'
//import OrderSettings from '.'

const SeatReservation = ({
    isAuthorized
}) => {
    return(
        <sectoin>
            <HallPlan isAuthorized={isAuthorized}/>
            {/* <OrderSettings /> */}
        </sectoin>
    )
}

export default SeatReservation;