import React from 'react'
import {NavLink} from 'react-router-dom'
import v4 from 'uuid'
import {withNamespaces} from 'react-i18next'

const OrderSettings = ({
    orderInfo,
    onCancelOrderTicketClick,
    onCancelOrderServiceClick,
    seatsPrice,
    t
}) => {

    const submitTicketOrder = () => {
        if (orderInfo.seats.length > 0){
            return(
                <div className="order-list__submit-button">
                    <NavLink to={`/SubmitOrder/${v4()}`}>
                        {t('okButton')}
                    </NavLink>
                </div>
            )
        }
    }

    return (
        <section className="order-list">
            <h1 className="order-list__title">{t('myTickets')}</h1>
            <ul className="order-list__list">
                {
                    orderInfo
                        .seats
                        .map(orderItem =>
                            <li className="order-list__item">
                                <div className="ticket-info">
                                    <h1>{`${t('line')}: ${orderItem.line} ${t('seat')}: ${orderItem.raw}`}</h1>
                                    <p>{orderItem.type} {t('price')}:{seatsPrice[orderItem.type]}</p>
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
            {
                submitTicketOrder()
            }
        </section>
    )
}

export default withNamespaces()(OrderSettings);