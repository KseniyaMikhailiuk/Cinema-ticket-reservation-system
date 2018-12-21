import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import * as actions from '../../store/actions'
import {getFilmInfo, getHallPlan, getOrderInfo} from '../../store/reducers'
import './orderSection.scss'
import FilmInfo from '../../components/OrderSection/filmInfo'
import SeatReservation from '../../components/OrderSection/seatReservation'
import '../../CommonStylesheets/orderList.scss'

class TicketOrder extends Component {
    componentDidMount() {
        const {startFilmInfoFetching, seanceId, clearInfo} = this.props;
        clearInfo();
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
        orderInfo: getOrderInfo(state)
    }
}

TicketOrder = withRouter(connect(
    mapStateToTicketOrderProps,
    actions
)(TicketOrder))

export default TicketOrder;