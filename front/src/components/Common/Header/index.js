import React from 'react'
import {NavLink} from 'react-router-dom'
import './header.scss'
import headerItems from'./headerDB'

const Header = () => {
    return (
        <nav>
            <p>
                {headerItems.cinemaName}
            </p>
            <ul>
                {headerItems.navLinks.map(item => 
                    <li><NavLink to={item.link} activeClassName="selected">{item.text}</NavLink></li>
                )}   
            </ul>    
        </nav>
    )
}

export default Header;