import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Header from './components/Common/Header/'
import Home from './containers/Home'
import Cinemas from './containers/Cinemas'
import Schedule from './containers/Schedule'
import SignIn from './containers/SignIn'
import TicketOrder from './containers/TicketOrder'
import SubmitOrder from './containers/SubmitOrder'
import Admin from './containers/Admin'
import { getAdminStatus, getLoginStatus } from './store/reducers';

class Page extends Component {
    render() {
        const {isAdmin, isLoggedIn, dispatch} = this.props;
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
                        <Route path='/SignIn' component={() => <SignIn dispatch={dispatch}/>}/>
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
    mapStateToProps
)(Page)

export default Page;