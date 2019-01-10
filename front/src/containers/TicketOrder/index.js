import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import FilmInfo from '../../components/OrderSection/filmInfo'
import SeatReservation from '../../components/OrderSection/seatReservation'

import {getFilmInfo, getHallPlan, getOrderInfo, getPreviousPath, getLoginStatus} from '../../store/stateGetters'
import * as actions from '../../store/actions'

import '../../CommonStylesheets/orderList.scss'
import './orderSection.scss'

class TicketOrder extends Component {

    componentDidMount() {
        const {startFilmInfoFetching, seanceId, clearInfo} = this.props;
        const {previousPath, isLoggedIn} = this.props;
        if (!previousPath === '/SignIn' || !isLoggedIn) {
            clearInfo();
        }
        startFilmInfoFetching(seanceId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.filmInfo !== prevProps.filmInfo) {
            this.getCurrentHallPlan();
        }
        if (this.props.orderInfo !== prevProps.orderInfo) {
            const {startFilmInfoFetching, seanceId} = this.props;
            startFilmInfoFetching(seanceId);
        }
    }

    getCurrentHallPlan() {
        const {startHallPlanFetchingAction, filmInfo} = this.props;
        startHallPlanFetchingAction(filmInfo);
    }

    addSeatToOrderList(seat) {
        const {addSeatToOrder, filmInfo} = this.props;
        addSeatToOrder(
            seat,
            filmInfo
        )
    }

    removeSeatFromOrderList(line, raw) {
        const {removeSeatFromOrder, filmInfo} = this.props;
        removeSeatFromOrder(
            {
                line,
                raw
            },
            filmInfo
        )
    }

    render() {
        const {filmInfo, selectedSeanceInfo, hallPlan, orderInfo, addServiceToOrder, removeServiceFromOrder} = this.props;
        return (
            <section className="order-section">
                <FilmInfo
                    filmInfo={filmInfo}
                    selectedSeanceInfo={selectedSeanceInfo}
                />
                <SeatReservation
                    hallPlan={hallPlan}
                    filmInfo={filmInfo}
                    orderInfo={orderInfo}
                    actions={{
                        onSeatSelect: this.addSeatToOrderList.bind(this),
                        onCancelOrderTicketClick: this.removeSeatFromOrderList.bind(this),
                        onServiceClick: addServiceToOrder,
                        onCancelOrderServiceClick: removeServiceFromOrder
                    }}
                />
            </section>
        )
    }
}

const mapStateToTicketOrderProps = (state, {match}) => {
    return{
        seanceId: match.params.seanceId,
        filmInfo: getFilmInfo(state),
        hallPlan: getHallPlan(state),
        orderInfo: getOrderInfo(state),
        previousPath: getPreviousPath(state),
        isLoggedIn: getLoginStatus(state)
    }
}

TicketOrder = withRouter(connect(
    mapStateToTicketOrderProps,
    actions
)(TicketOrder))

export default TicketOrder;