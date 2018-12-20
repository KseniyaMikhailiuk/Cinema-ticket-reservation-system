import React from 'react'
import HallPlan from './hallPlan'
import OrderSettings from './orderSettings'
import AdditionalServices from './additionalServices'

const SeatReservation = ({
    hallPlan,
    filmInfo,
    onSeatSelect,
    orderInfo,
    onCancelOrderTicketClick,
    onCancelOrderServiceClick,
    onServiceClick
}) => {
    return (
        <sectoin className="order-form">
            <section className="order-options">
                <HallPlan hallPlan={hallPlan} seatsInfo={filmInfo.seatsInfo} onSeatSelect={onSeatSelect}/>
                <AdditionalServices additionalServicesList={filmInfo.services} onServiceClick={onServiceClick}/>
            </section>
            <OrderSettings
                orderInfo={orderInfo}
                onCancelOrderTicketClick={onCancelOrderTicketClick}
                onCancelOrderServiceClick={onCancelOrderServiceClick}/>
        </sectoin>
    )
}

export default SeatReservation;