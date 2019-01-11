import React, {Component} from 'react'
import { connect } from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom'
import {withNamespaces} from 'react-i18next'

import { getLoginStatus, getAdminStatus } from '../../../store/stateGetters';
import * as actions from '../../../store/actions'

import './header.scss'

class Header extends Component {
    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        const {savePreviousPath} = this.props;
        this.props.history.listen((location, action) => savePreviousPath(location.pathname));
    }

    onClick () {
        const {deauthorize} = this.props;
        this.props.history.push('/Schedule');
        deauthorize();
    }

    render() {
        const {isLoggedIn, isAdmin, t} = this.props;
        return (
            <nav>
                <p>
                    VELVET SCREEN
                </p>
                <ul>
                    <li><NavLink to="/Home" activeClassName="selected">{t('mainPage')}</NavLink></li>
                    <li><NavLink to="/Schedule" activeClassName="selected">{t('schedule')}</NavLink></li>
                    <li><NavLink to="/Cinemas" activeClassName="selected">{t('cinemas')}</NavLink></li>
                    {
                        isLoggedIn ? (
                            isAdmin ? (
                                <>
                                    <li>
                                        <NavLink to="/Admin" activeClassName="selected">{t('settings')}</NavLink>
                                    </li>
                                    <li>
                                        <a onClick={this.onClick}>{t('signOut')}</a>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/MyOrders" activeClassName="selected">{t('myOrders')}</NavLink>
                                    </li>
                                    <li>
                                        <a onClick={this.onClick}>
                                            {t('signOut')}
                                        </a>
                                    </li>
                                </>
                            )
                        ) : (
                            <li><NavLink to="/SignIn" activeClassName="selected">
                                {t('logIn')}
                            </NavLink></li>
                        )
                    }
                </ul>
            </nav>
        )
    }
}


const mapStateTpProps = (state) => {
    return {
        isLoggedIn: getLoginStatus(state),
        isAdmin: getAdminStatus(state)
    }
}

Header = withRouter(connect(
    mapStateTpProps,
    actions
)(Header))

export default withNamespaces()(Header);