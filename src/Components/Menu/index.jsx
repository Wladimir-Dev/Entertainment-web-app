import React from 'react'
import { RxBookmark } from 'react-icons/rx';
import { SiNetflix } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdLocalMovies, MdDeviceUnknown } from "react-icons/md";

import styles from './styles.module.css'
import desktop from './desktop.module.css'
import { NavLink } from 'react-router-dom';

export const Menu = () => {

    return (
        <header className={`${styles.header} ${desktop.header}`}>

            <figure><NavLink to={'/'}><SiNetflix /></NavLink>
            </figure>

            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}
                            className={({isActive}) => isActive ? styles.isActive : undefined}>
                            <MdLocalMovies />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/SavedMovies'}
                            className={({isActive}) => isActive ? styles.isActive : undefined}>
                    <RxBookmark /></NavLink></li>
                    <li><MdDeviceUnknown /></li>
                </ul>
            </nav>

            <div className={`${styles.header__iconGit}`}>
                <a
                    href='https://github.com/Wladimir-Dev/Entertainment-web-app'
                    target={'_blank'}><BsGithub /></a>
            </div>

        </header>
    )
}
