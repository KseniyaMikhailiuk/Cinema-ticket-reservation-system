import React, {Component} from 'react'
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'

import { getLoginStatus, getAdminStatus } from '../../../store/reducers';
import * as actions from '../../../store/actions'

import './header.scss'

class Header extends Component {
    render() {
        const {isLoggedIn, isAdmin, deauthorize} = this.props;
        return (
            <nav>
                <p>
                    VELVET SCREEN
                </p>
                <ul>
                    <li><NavLink to="/Home" activeClassName="selected">Главная</NavLink></li>
                    <li><NavLink to="/Schedule" activeClassName="selected">Афиша</NavLink></li>
                    <li><NavLink to="/Cinemas" activeClassName="selected">Кинотеатры</NavLink></li>
                    {
                        isLoggedIn ? (
                            isAdmin ? (
                                <><li><NavLink to="/Admin" activeClassName="selected">
                                    Настройки
                                </NavLink></li>
                                <li><a onClick={deauthorize} >
                                    Выход
                                </a></li></>
                            ) : (
                                <li><a onClick={deauthorize} >
                                    Выход
                                </a></li>
                            )
                        ) : (
                            <li><NavLink to="/SignIn" activeClassName="selected">
                                Войти
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

Header = connect(
    mapStateTpProps,
    actions
)(Header)

export default Header;