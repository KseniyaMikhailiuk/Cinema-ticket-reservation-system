import React from 'react'

const UserOrdersListItem = ({
    itemInfo
}) => {
    console.log(itemInfo)
    return(
        <article className="list-item">
            <section className="film-item__image-container">
                <img src={itemInfo.seanceInfo.image} alt="" className="film-item__image"/>
            </section>
            <section className="film-item__description">
                <h1>{itemInfo.seanceInfo.filmTitle}</h1>
                <p>{`${itemInfo.seanceInfo.dateTime.date()}.${itemInfo.seanceInfo.dateTime.month() + 1} `}</p>
                <section className="order-list">
                    <ul className="order-list__list">
                        {
                            itemInfo
                                .orderInfo
                                    .seats
                                    .map(orderItem =>
                                        <li className="order-list__item">
                                            <div className="ticket-info">
                                                <h1>{`ряд: ${orderItem.line} место: ${orderItem.raw}`}</h1>
                                                <p>{orderItem.type} {itemInfo.seanceInfo.price[orderItem.type]}</p>
                                            </div>
                                        </li>
                                    )
                        }
                        {
                            itemInfo
                                .orderInfo
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