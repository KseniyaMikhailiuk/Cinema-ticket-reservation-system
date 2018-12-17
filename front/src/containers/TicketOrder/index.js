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
        const {fetchFilmInfo, selectedSeanceInfo, fetchHallPlan} = this.props;
        fetchHallPlan(selectedSeanceInfo);
        fetchFilmInfo(selectedSeanceInfo.film);
    }

    addSeatToOrderList(seatId) {      
        const {addSeatToOrder, selectedSeanceInfo} = this.props;
        console.log(selectedSeanceInfo)
        addSeatToOrder({
            seatId,
            selectedSeanceInfo
        })
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
                    orderInfo={orderInfo} 
                    onSeatSelect={this.addSeatToOrderList.bind(this)}
                />
            </section>
        )
    }
}

const mapStateToTicketOrderProps = (state, {match: match}) => { 
    return{
        selectedSeanceInfo: match.params,
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