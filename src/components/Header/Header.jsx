import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../img/logo-white.png'

import style from './Header.module.css';

export const Header = () => {
    return (
        <nav className={style.header}>
            <div className={style.logo} >
                <Link><img className={style.logoImg} src={Logo} alt="logo" /></Link>
            </div>
            <ul className={style.list}>
                <li> <Link to={'/'} >Главная</Link> </li>
                <li> <Link to={'/document'} >Создать документ</Link> </li>
            </ul>
        </nav>



    )
}
