import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Common/Header/'
import {Provider} from 'react-redux'
import Home from './containers/Home'
import Cinemas from './containers/Cinemas'
import Schedule from './containers/Schedule'
import SignIn from './containers/SignIn'
import TicketOrder from './containers/TicketOrder'
import SubmitOrder from './containers/SubmitOrder'
import Admin from './containers/Admin'

const App = ({
    store
}) => {
    const {isAdmin, isLoggedIn} = store.getState();
    return(
        <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    <Header isLoggedIn={isLoggedIn}/>
                        <section className="content">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path='/Cinemas' component={Cinemas}/>
                                <Route path='/Home' component={Home}/>
                                <Route path='/Schedule' component={Schedule}/>
                                <Route path='/SignIn' component={() => <SignIn dispatch={store.dispatch}/>}/>
                                <Route path='/TicketOrder/:seanceId' component={TicketOrder}/>
                                <Route path='/SubmitOrder/:orderId' component={SubmitOrder}/>
                                <Route path='/Admin' render= {() =>
                                    (isLoggedIn && isAdmin) ?
                                    <Admin/> :
                                    <Redirect to="/Schedule"/>
                                }/>
                            </Switch>
                    </section>
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    )
}

export default App;