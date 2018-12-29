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
        <section className="order-form">
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
                seatsPrice={filmInfo.price}
                orderInfo={orderInfo}
                onCancelOrderTicketClick={actions.onCancelOrderTicketClick}
                onCancelOrderServiceClick={actions.onCancelOrderServiceClick}/>
        </section>
    )
}

export default SeatReservation;