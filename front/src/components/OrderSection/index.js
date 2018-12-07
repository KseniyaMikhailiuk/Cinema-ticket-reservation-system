import React from 'react'
import FilmInfo from './filmInfo'
import SeatReservation from './seatReservation'
import './orderSection.scss'

const OrderSection = () => {
    return(
        <section className="order-section">
            <FilmInfo />
            <SeatReservation />
        </section>
    )
}
export default OrderSection;