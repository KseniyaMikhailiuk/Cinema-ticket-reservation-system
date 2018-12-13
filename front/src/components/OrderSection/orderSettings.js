import React from 'react'
import order from './orderDB'

const OrderSettings = () => {
    return (
        <section className="order-list">
            <h1 className="order-list__title">Мои билеты</h1>
            <ul className="order-list__list">
                {order.map(element => 
                    <li className="order-list__item">
                        <div className="ticket-info">
                            <h1>{element.filmName}</h1>    
                                {element.seatType}
                                {element.seatType}
                        </div>
                        <div className="order-list__cross">&#10005;</div>
                    </li> 
                )}
            </ul>
        </section>
    )
}

export default OrderSettings;