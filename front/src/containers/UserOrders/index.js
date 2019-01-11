import React, {Component} from 'react'
import { connect } from 'react-redux';
import momemt from 'moment'
import Select from 'react-select'
import {withNamespaces} from 'react-i18next'

import ItemList from '../../components/Common/ItemList'
import UserOrdersListItem from '../../components/UserOrdersListItem'
import NothingFound from '../../components/Common/nothingFound';

import * as ordersInfo from '../../services/api/usersOrdersInfoFetch'
import {getUserInfo} from '../../store/stateGetters'

import './userOrders.scss'

class UserOrders extends Component {

    state = {
        filter: {
            label: "all",
            value: "all"
        }
    }

    constructor (props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (selectedOption) {
        this.setState({
            filter: selectedOption
        });
    }

    componentDidMount () {
        const {userInfo} = this.props;
        ordersInfo.getOrders(userInfo.id)
            .then(response =>
                this.setState({
                    orders: {
                        all: response,
                        previous: response.filter(order => order.seanceInfo.dateTime < momemt()),
                        next: response.filter(order => order.seanceInfo.dateTime > momemt())
                    }
                })
            );
    }

    render () {
        const {t} = this.props;
        const {orders, filter} = this.state;
        let options = [
            {value: "all", label: t('all')},
            {value: "previous", label: t('previous')},
            {value: "next", label: t('next')},
        ]

        return (
            <article className="user-orders-page">
                <Select
                    name="orderFilter"
                    className="form-item select"
                    options={options}
                    isSearchable
                    isClearable
                    onChange={this.handleInputChange}
                />
                {orders ?
                    <ItemList
                        list={orders[filter.value]}
                        itemType={UserOrdersListItem}
                    /> :
                    <NothingFound />
                }
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: getUserInfo(state)
    }
}

UserOrders = connect(
    mapStateToProps
)(UserOrders);

export default withNamespaces()(UserOrders);