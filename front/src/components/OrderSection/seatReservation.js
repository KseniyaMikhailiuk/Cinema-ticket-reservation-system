import React from 'react'
import HallPlan from './hallPlan'
import OrderSettings from './orderSettings'
import AdditionalServices from './additionalServices'

const SeatReservation = ({
    hallPlan,
    filmInfo,
    orderInfo,
    actions
}) => {
    return (
        <sectoin className="order-form">
            <section className="order-options">
                <HallPlan
                    hallPlan={hallPlan}
                    seatsInfo={filmInfo.seatsInfo}
                    onSeatSelect={actions.onSeatSelect}
                />
                <AdditionalServices
                    additionalServicesList={filmInfo.services}
                    onServiceClick={actions.onServiceClick}
                />
            </section>
            <OrderSettings
                orderInfo={orderInfo}
                onCancelOrderTicketClick={actions.onCancelOrderTicketClick}
                onCancelOrderServiceClick={actions.onCancelOrderServiceClick}/>
        </sectoin>
    )
}

export default SeatReservation;