import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Redirect, Route } from 'react-router-dom';

import { getLoginStatus } from '../../store/stateGetters';

class PrivateLoggedInUserRoute extends Component {
    render () {
        const {component: Component, isLoggedIn, ...rest} = this.props;
        return (
            <Route {...rest} render={() =>
                isLoggedIn
                    ? (
                        <Component/>
                    )
                    : (
                        <Redirect to='/SignIn'/>
                    )
            }/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: getLoginStatus(state)
    }
}

PrivateLoggedInUserRoute = connect(
    mapStateToProps
)(PrivateLoggedInUserRoute)

export default PrivateLoggedInUserRoute;