import React from 'react'
import FilmInfo from './filmInfo'
import SeatReservation from './seatReservation'
import './orderSection.scss'

const OrderSection = ({
    hallPlan,
    orderInfo
}) => {
    return(
        <section className="order-section">
            <FilmInfo filmInfo={orderInfo}/>
            <SeatReservation hallPlan={hallPlan}/>
        </section>
    )
}
export default OrderSection;