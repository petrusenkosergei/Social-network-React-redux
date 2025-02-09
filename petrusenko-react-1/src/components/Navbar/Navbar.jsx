import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activ}> Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activ}> Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activ}> Users</NavLink>
            </div>
            <div className={s.item}>
                <a> News</a>
            </div>
            <div className={s.item}>
                <a> Music</a>
            </div>
            <div className={s.item}>
                <a> Settings</a>
            </div>
            <div className={s.friends}>
                <div className={s.item}>
                    <NavLink to="/friends" activeClassName={s.activ}>Friends</NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

