import React, {Component} from 'react'
import OrderSection from '../../../components/OrderSection/'
import hallPlan from'./hallPlanDB'

class TicketOrder extends Component{
    render() {
        return (
            <OrderSection hallPlan={hallPlan}/>
        )
    }
}

export default TicketOrder;