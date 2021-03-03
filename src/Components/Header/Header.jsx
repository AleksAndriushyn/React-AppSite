import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to={'/profile'}>
                <img src='https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png' />
            </NavLink>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div className={s.buttonBlock}>
                        {props.login} - <button onClick={props.logoutUser}>Log Out</button>
                    </div>
                    : <div className={s.Login}>
                        <NavLink to={'/login'}>Login</NavLink>
                      </div>}
            </div>
        </header>
    );
}

export default Header;