import React, {Component} from 'react'
import {connect} from 'react-redux'

import SuccessMessage from '../../components/Common/SuccessMessage'

import {getOrderInfo, getFilmInfo} from '../../store/reducers'
import * as actions from '../../store/actions'

import './submitOrder.scss'

class SubmitOrder extends Component{

    componentWillUnmount(){
        const {clearInfo} = this.props;
        clearInfo();
    }

    totalPrice = () => {
        const {orderInfo, filmInfo} = this.props;
        let totalPrice = 0;
        orderInfo.seats.forEach(orderItem => {
            totalPrice += filmInfo.price[orderItem.type];
        });
        orderInfo.services.forEach(orderItem => {
            totalPrice += orderItem.price;
        });
        return totalPrice;
    }

    render() {
        const {orderInfo, addOrderToDatabase, orderId, filmInfo, userId, isRequestSucceeded} = this.props;

        if (orderInfo.seats.length <= 0){
            return(
                <div className="order-list__title submit-order__title">
                    Ваш заказ пуст
                </div>
            )
        }

        if (isRequestSucceeded){
            return <SuccessMessage path='/Schedule'/>
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
                <input
                    className="submit-order__button bordered"
                    type="button"
                    value="Купить"
                    onClick={() => addOrderToDatabase({...orderInfo, orderId}, filmInfo.seanceId, userId)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, {match}) => {
    return{
        orderInfo: getOrderInfo(state),
        orderId: match.params.orderId,
        filmInfo: getFilmInfo(state),
        userId: state.userInfo.id,
        isRequestSucceeded: state.isRequestSucceeded
    }
}

SubmitOrder = connect(
    mapStateToProps,
    actions
)(SubmitOrder)

export default SubmitOrder;