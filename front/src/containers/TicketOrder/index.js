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
        const {fetchFilmInfo, seanceId, clearInfoOnExit} = this.props;
        clearInfoOnExit();
        fetchFilmInfo(seanceId);
        this.fetchCurrentHallPlan();
    }

    componentDidUpdate(prevProps) {
        if (this.props.orderInfo !== prevProps.orderInfo) {
            const {fetchFilmInfo, seanceId} = this.props;
            fetchFilmInfo(seanceId);
        }
        if (this.props.filmInfo !== prevProps.filmInfo) {
            this.fetchCurrentHallPlan();
        }
    }

    fetchCurrentHallPlan() {
        const {fetchHallPlan, filmInfo} = this.props;
        fetchHallPlan(filmInfo);
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
                    onSeatSelect={this.addSeatToOrderList.bind(this)}
                    onCancelOrderTicketClick={this.removeSeatFromOrderList.bind(this)}
                    onServiceClick={addServiceToOrder}
                    onCancelOrderServiceClick={removeServiceFromOrder}
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