import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://sun9-56.userapi.com/impg/m3dQ58OOabjUXt1cvYu1ejrzCod_R71uKflURA/VFILRxJfS9g.jpg?size=388x277&quality=96&sign=80e2afbe9d492fac0198063160fb8a95&type=album' />
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;