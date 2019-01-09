import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import * as actions from '../../../store/actions'
import {getLoginStatus, getAdminStatus} from '../../../store/reducers'

import './header.scss'

class Header extends Component {

    displayAdminSettings (isAdmin) {
        if (isAdmin) {
            return (
                <li><NavLink to="/Admin" activeClassName="selected">
                    Настройки
                </NavLink></li>
            )
        }
    }

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
						isLoggedIn ?
                        <li><a onClick={deauthorize} >
                            Выход
                        </a></li> :
                        <li><NavLink to="/SignIn" activeClassName="selected">
                            Войти
                        </NavLink></li>
                    }
                    {
                        this.displayAdminSettings(isAdmin)
                    }
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isLoggedIn: getLoginStatus(state),
        isAdmin: getAdminStatus(state)
    }
}

Header = connect(
    mapStateToProps,
    actions
)(Header)

export default Header;