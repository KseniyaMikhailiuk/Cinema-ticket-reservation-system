import React from 'react'
import FilmInfo from './filmInfo'
import SeatReservation from './seatReservation'
import './orderSection.scss'

const OrderSection = ({
    hallPlan
}) => {
    return(
        <section className="order-section">
            <FilmInfo />
            <SeatReservation hallPlan={hallPlan}/>
        </section>
    )
}
export default OrderSection;