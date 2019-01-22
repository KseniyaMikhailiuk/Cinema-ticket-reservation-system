import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import Loader from 'react-loader'

import Header from './components/Common/Header'
import Home from './containers/Home'
import Cinemas from './containers/Cinemas'
import Schedule from './containers/Schedule'
import SignIn from './containers/SignIn'
import TicketOrder from './containers/TicketOrder'
import SubmitOrder from './containers/SubmitOrder'
import Admin from './containers/Admin'
import UserOrders from './containers/UserOrders'
import Footer from './components/Common/Footer'
import PrivateAdminRoute from './components/PrivateRoutes/privateAdminRoute'
import PrivateLoggedInUserRoute from './components/PrivateRoutes/privateLoggedInUserRoute'

import * as actions from './store/actions'
import {getLoadingStatus} from './store/stateGetters'

import './i18n'

import 'react-toastify/dist/ReactToastify.css';

class Page extends Component {
    render() {
        const {authorize, isLoading} = this.props;
        return(
            <BrowserRouter>
                <>
                    <Header/>
                    <section className="content">
                        <Loader loaded={!isLoading}>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path='/Cinemas' component={Cinemas}/>
                                <Route path='/Home' component={Home}/>
                                <Route path='/Schedule' component={Schedule}/>
                                <Route path='/SignIn' component={() => <SignIn authorize={authorize}/>}/>
                                <Route path='/TicketOrder/:seanceId' component={TicketOrder}/>
                                <PrivateAdminRoute path='/Admin' component={Admin} exact/>
                                <PrivateLoggedInUserRoute path='/SubmitOrder/:orderId' component={SubmitOrder} exact/>
                                <PrivateLoggedInUserRoute path='/MyOrders' component={UserOrders} exact/>
                            </Switch>
                        </Loader>
                    </section>
                    <Footer/>
                    <ToastContainer />
                </>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: getLoadingStatus(state)
    }
}

Page = connect(
    mapStateToProps,
    actions
)(Page)

export default Page;