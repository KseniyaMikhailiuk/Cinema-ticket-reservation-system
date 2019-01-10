import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Redirect, Route } from 'react-router-dom';

import { getAdminStatus } from '../../store/stateGetters';

class PrivateAdminRoute extends Component {
    render () {
        const {component: Component, isAdmin, ...rest} = this.props;
        return (
            <Route {...rest} render={() =>
                isAdmin ? (
                    <Component/>
                ) : (
                    <Redirect to='/'/>
                )
            }/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isAdmin: getAdminStatus(state)
    }
}

PrivateAdminRoute = connect(
    mapStateToProps
)(PrivateAdminRoute)

export default PrivateAdminRoute;