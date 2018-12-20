import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import * as actions from '../../store/actions'
import {getFilmInfo, getHallPlan, getOrderInfo} from '../../store/reducers'
import './orderSection.scss'
import FilmInfo from '../../components/OrderSection/filmInfo'
import SeatReservation from '../../components/OrderSection/seatReservation'

class TicketOrder extends Component {
    componentDidMount() {
        const {fetchFilmInfo, seanceId} = this.props;
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

    componentWillUnmount() {
        const {clearOrderList, clearHallPlan} = this.props;
        clearOrderList();
        clearHallPlan();
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
        const {filmInfo, selectedSeanceInfo, hallPlan, orderInfo} = this.props;
        return (
            <section className="order-section">
                <FilmInfo
                    filmInfo={filmInfo}
                    selectedSeanceInfo={selectedSeanceInfo}
                />
                <SeatReservation
                    hallPlan={hallPlan}
                    seatsInfo={filmInfo.seatsInfo}
                    orderInfo={orderInfo}
                    onSeatSelect={this.addSeatToOrderList.bind(this)}
                    onCancelOrderItemClick={this.removeSeatFromOrderList.bind(this)}
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