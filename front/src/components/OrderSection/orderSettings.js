import React from 'react'
import order from './orderDB'

const OrderSettings = ({
    orderInfo
}) => {
    return (
        <section className="order-list">
            <h1 className="order-list__title">Мои билеты</h1>
            <ul className="order-list__list">
                {
                    orderInfo
                        .map(orderItem => 
                            <li className="order-list__item">
                                <div className="ticket-info">
                                    <h1>{`ряд: ${orderItem.line} место: ${orderItem.raw}`}</h1>    
                                        {orderItem.seatType}
                                </div>
                                <div className="order-list__cross">&#10005;</div>
                            </li> 
                        )
                }
            </ul>
        </section>
    )
}

export default OrderSettings;