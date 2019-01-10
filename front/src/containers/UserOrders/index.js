import React, {Component} from 'react'
import momemt from 'moment'

import ItemList from '../../components/Common/ItemList'

import * as ordersInfo from '../../services/api/userOrdersFetch'

class UserOrders extends Component {

    state = {
        orders: {
            all: [],
            previous: [],
            next: []
        },
        filter: {
            label: "",
            value: ""
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
        ordersInfo.getOrders(userId)
            .then(response =>
                this.setState({
                    orders: {
                        ...orders,
                        all: response,
                        previous: response.filter(seance => seance.dateTime < momemt()),
                        next: response.filter(seance => seance.dateTime < momemt())
                    }
                })
            );
    }

    render () {
        const {orders, filter} = this.state;
        return (
            <article>
                <Select
                    name="orderFilter"
                    className="form-item select"
                    options={filter}
                    isSearchable
                    isClearable
                    value={this.state.filter.label}
                    onChange={this.handleInputChange}
                    placeholder="Фильтр"
                />
                <ItemList
                    list={orders[filter.value]}
                    itemType={FilmItem}
                />
            </article>
        )
    }
}

export default UserOrders;