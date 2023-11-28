import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item } >Message</NavLink>
            </div>
            <div>
                <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item } >Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;