import React from 'react'

const OrderSettings = ({
    orderInfo,
    onCancelOrderTicketClick,
    onCancelOrderServiceClick
}) => {
    console.log(orderInfo)
    return (
        <section className="order-list">
            <h1 className="order-list__title">Мои билеты</h1>
            <ul className="order-list__list">
                {
                    orderInfo
                        .seats
                        .map(orderItem =>
                            <li className="order-list__item">
                                <div className="ticket-info">
                                    <h1>{`ряд: ${orderItem.line} место: ${orderItem.raw}`}</h1>
                                    <p>{orderItem.type} {orderItem.price}</p>
                                </div>
                                <div
                                    className="order-list__cross"
                                    onClick={() => onCancelOrderTicketClick(orderItem.line, orderItem.raw)}>
                                    &#10005;
                                </div>
                            </li>
                        )
                }
                {
                    orderInfo
                        .services
                        .map(orderItem =>
                            <li className="order-list__item">
                                <div className="ticket-info">
                                    <h1>{orderItem.name}</h1>
                                    <p>{orderItem.price}</p>
                                </div>
                                <div
                                    className="order-list__cross"
                                    onClick={() => onCancelOrderServiceClick(orderItem.id)}>
                                    &#10005;
                                </div>
                            </li>
                        )
                }
            </ul>
        </section>
    )
}

export default OrderSettings;