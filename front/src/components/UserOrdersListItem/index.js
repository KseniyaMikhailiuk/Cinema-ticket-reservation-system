import React from 'react'

const UserOrdersListItem = ({

}) => {
    return(
        <article className="list-item">
            <section className="film-item__image-container">
                <img src={image} alt="" className="film-item__image"/>
            </section>
            <section className="film-item__description">
                <h1>{itemInfo.title}</h1>
                <section className="order-list">
                    <ul className="order-list__list">
                        {
                            orderInfo
                                .seats
                                .map(orderItem =>
                                    <li className="order-list__item">
                                        <div className="ticket-info">
                                            <h1>{`ряд: ${orderItem.line} место: ${orderItem.raw}`}</h1>
                                            <p>{orderItem.type} {seatsPrice[orderItem.type]}</p>
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
                                    </li>
                                )
                        }
                    </ul>
                </section>
            </section>
        </article>
    )
}

export default UserOrdersListItem;