import React from 'react'
import {NavLink} from 'react-router-dom'

import './header.scss'

const Header = ({
    isLoggedIn
}) => {
    return (
        <nav>
            <p>
                VELVET SCREEN
            </p>
            <ul>
                <li><NavLink to="/Home" activeClassName="selected">Главная</NavLink></li>
                <li><NavLink to="/Schedule" activeClassName="selected">Афиша</NavLink></li>
                <li><NavLink to="/Cinemas" activeClassName="selected">Кинотеатры</NavLink></li>
                <li><NavLink to="/SignIn" activeClassName="selected">
                    {isLoggedIn ? "Выход" : "Войти"}
                </NavLink></li>
            </ul>
        </nav>
    )
}

export default Header;