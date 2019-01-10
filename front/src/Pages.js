import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';

import Header from './components/Common/Header'
import Home from './containers/Home'
import Cinemas from './containers/Cinemas'
import Schedule from './containers/Schedule'
import SignIn from './containers/SignIn'
import TicketOrder from './containers/TicketOrder'
import SubmitOrder from './containers/SubmitOrder'
import Admin from './containers/Admin'
import PrivateAdminRoute from './components/PrivateRoutes/privateAdminRoute'
import PrivateLoggedInUserRoute from './components/PrivateRoutes/privateLoggedInUserRoute'

import { getAdminStatus, getLoginStatus } from './store/stateGetters';
import * as actions from './store/actions'

import 'react-toastify/dist/ReactToastify.css';

class Page extends Component {
    render() {
        const {authorize} = this.props;
        return(
            <BrowserRouter>
                <>
                    <Header/>
                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path='/Cinemas' component={Cinemas}/>
                            <Route path='/Home' component={Home}/>
                            <Route path='/Schedule' component={Schedule}/>
                            <Route path='/SignIn' component={() => <SignIn authorize={authorize}/>}/>
                            <Route path='/TicketOrder/:seanceId' component={TicketOrder}/>
                            <PrivateAdminRoute path='/Admin' component={Admin} exact/>
                            <PrivateLoggedInUserRoute path='/SubmitOrder/:orderId' component={SubmitOrder} exact/>
                            <PrivateLoggedInUserRoute path='/MyOrders' component={SubmitOrder} exact/>
                        </Switch>
                    </section>
                    <ToastContainer />
                </>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAdmin: getAdminStatus(state),
        isLoggedIn: getLoginStatus(state)
    }
}

Page = connect(
    mapStateToProps,
    actions
)(Page)

export default Page;