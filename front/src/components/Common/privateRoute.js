import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
    component: Component,
    isAllowed: isAllowed,
    redirectPath: redirectPath,
    ...rest
}) => {
    return(
        <Route {...rest} render={props => (
            isAllowed ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: redirectPath
                }}/>
            )
        )} />
    )
};

export default PrivateRoute;