import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';

import Header from './components/Common/Header'
import Home from './containers/Home'
import Cinemas from './containers/Cinemas'
import Schedule from './containers/Schedule'
import SignIn from './containers/SignIn'
import TicketOrder from './containers/TicketOrder'
import SubmitOrder from './containers/SubmitOrder'
import Admin from './containers/Admin'

import { getAdminStatus, getLoginStatus } from './store/reducers';
import * as actions from './store/actions'

import 'react-toastify/dist/ReactToastify.css';

class Page extends Component {
    render() {
        const {isAdmin, isLoggedIn, authorize, deauthorize} = this.props;
        return(
            <BrowserRouter>
                <>
                    <Header
                        isAdmin={isAdmin}
                        isLoggedIn={isLoggedIn}
                        deauthorize={deauthorize}
                    />
                    <ToastContainer />
                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path='/Cinemas' component={Cinemas}/>
                            <Route path='/Home' component={Home}/>
                            <Route path='/Schedule' component={Schedule}/>
                            <Route path='/SignIn' component={() => <SignIn authorize={authorize}/>}/>
                            <Route path='/TicketOrder/:seanceId' component={TicketOrder}/>
                            <Route path='/SubmitOrder/:orderId' component={SubmitOrder}/>
                            <Route path='/Admin' render= {() => (
                                (isLoggedIn && isAdmin) ? (
                                    <Admin/>
                                ) : (
                                    <Redirect to="/Schedule"/>
                                )
                            )}/>
                        </Switch>
                    </section>
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