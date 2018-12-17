import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Common/Header/'
import Footer from './components/Common/Footer/'
import {Provider} from 'react-redux'  
import Home from './containers/Home'
import Cinemas from './containers/Cinemas'
import Schedule from './containers/Schedule';
import SignIn from './containers/SignIn'
import TicketOrder from './containers/TicketOrder';

const App = ({
    store
}) => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path='/Cinemas' component={Cinemas}/>
                        <Route path='/Home' component={Home}/>
                        <Route path='/Schedule' component={Schedule}/>
                        <Route path='/SignIn' component={SignIn}/>
                        <Route path='/TicketOrder/:film/:city/:cinema/:hall/:time' component={TicketOrder}/>
                    </Switch>
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    )
}

export default App;