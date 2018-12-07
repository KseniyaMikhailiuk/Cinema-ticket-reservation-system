import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../content/Home'
import Cinemas from '../content/Cinemas'
import Schedule from '../content/Schedule';
import SignIn from '../content/SignIn'
import TicketOrder from '../content/TicketOrder';

const Content = () => {
    return(
        <Switch>
            <Route path='/Cinemas' component={Cinemas}/>
            <Route path='/Home' component={Home}/>
            <Route path='/Schedule' component={Schedule}/>
            <Route path='/SignIn' component={SignIn}/>
            <Route path='/Info' component={TicketOrder}/>
        </Switch>
    )
}
export default Content;