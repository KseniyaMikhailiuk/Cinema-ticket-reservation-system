import React, {Component} from 'react'
import {connect} from 'react-redux'
import OrderSection from '../../components/OrderSection/'
import hallPlan from'./hallPlanDB'
import {withRouter} from 'react-router'
import * as actions from '../../store/actions'

class TicketOrder extends Component {

    componentDidMount() {
        const {fetchFilmInfo, params} = this.props;
        fetchFilmInfo(params.film);
    }

    getFilmInfo() {
        const {match} = this.props;        
    }

    render() {
        const {fetchFilmInfo} = this.props;
        return (
            <OrderSection hallPlan={hallPlan} orderInfo={{}}/>
        )
    }
}

const mapStateToTicketOrderProps = (state, {match: match}) => {  
    return{
        params: match.params
    }
}

TicketOrder = withRouter(connect(
    mapStateToTicketOrderProps,
    actions
)(TicketOrder))

export default TicketOrder;