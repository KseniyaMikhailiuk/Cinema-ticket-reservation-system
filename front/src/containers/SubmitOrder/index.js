import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrderInfo} from '../../store/reducers'
import * as actions from '../../store/actions'
import './submitOrder.scss'

class SubmitOrder extends Component{

    totalPrice = () => {
        const {orderInfo} = this.props;
        let totalPrice = 0;
        orderInfo.seats.forEach(orderItem => {
            totalPrice += orderItem.price;
        });
        orderInfo.services.forEach(orderItem => {
            totalPrice += orderItem.price;
        });
        return totalPrice;
    }

    render() {
        const {orderInfo} = this.props;
        if (orderInfo.seats.length <= 0){
            return(
                <div className="order-list__title submit-order__title">
                    Ваш заказ пуст
                </div>
            )
        }
        return(
            <div className="order-list submit-order">
                <h1 className="order-list__title submit-order__title">
                    Ваш заказ
                </h1>
                <ul className="order-list__list submit-order__list">
                    {orderInfo.seats.map(seat =>
                        <li className="submit-order__list-item">
                            <h1>{`ряд: ${seat.line} место: ${seat.raw}`}</h1>
                            <p>{seat.type} {seat.price}</p>
                        </li>
                    )}
                    {orderInfo.services.map(service =>
                        <li className="submit-order__list-item">
                            <h1>{service.name}</h1>
                            <p>{service.price}</p>
                        </li>
                    )}
                </ul>
                <h1 className="order-list__title submit-order__title">
                    {`Общая сумма заказа: ${this.totalPrice()}`}
                </h1>
                <input className="submit-order__button bordered" type="button" value="Купить"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        orderInfo: getOrderInfo(state)
    }
}

SubmitOrder = connect(
    mapStateToProps,
    actions
)(SubmitOrder)

export default SubmitOrder;