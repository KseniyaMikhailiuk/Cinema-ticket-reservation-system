import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import SuccessMessage from '../../components/Common/SuccessMessage'

import {getOrderInfo, getFilmInfo, getUserInfo} from '../../store/stateGetters'
import * as actions from '../../store/actions'

import * as ordersInfo from '../../services/api/usersOrdersInfoFetch'

import './submitOrder.scss'

class SubmitOrder extends Component{

    state = {
        isRequestSucceeded: false
    }

    constructor (props) {
        super(props);
        this.addOrderToDatabase = this.addOrderToDatabase.bind(this);
    }

    componentWillUnmount(){
        const {clearInfo} = this.props;
        clearInfo();
    }

    addOrderToDatabase (orderInfo, orderId, seanceId, userId) {
        ordersInfo.addOrder(orderInfo, orderId, seanceId, userId)
            .then(() => {
                this.setState({
                    isRequestSucceeded: true
                })
            })
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
        const {orderInfo, orderId, filmInfo, userInfo} = this.props;

        if (orderInfo.seats.length <= 0){
            return(
                <div className="order-list__title submit-order__title">
                    Ваш заказ пуст
                </div>
            )
        }

        if (this.state.isRequestSucceeded){
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
                    onClick={() => this.addOrderToDatabase(orderInfo, orderId, filmInfo.seanceId, userInfo.id)}
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
        userInfo: getUserInfo(state)
    }
}

SubmitOrder = withRouter(connect(
    mapStateToProps,
    actions
)(SubmitOrder))

export default SubmitOrder;