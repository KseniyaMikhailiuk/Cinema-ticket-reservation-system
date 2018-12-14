import React, {Component} from 'react'
import OrderSection from '../../components/OrderSection/'
import hallPlan from'./hallPlanDB'
import {withRouter} from 'react-router'

class TicketOrder extends Component{

    getFilmInfo() {
        const {match} = this.props;        
    }

    render() {
        const {match} = this.props;
        return (
            <OrderSection hallPlan={hallPlan} orderInfo={match.path}/>
        )
    }
}

TicketOrder = withRouter(
    TicketOrder
)

export default TicketOrder;