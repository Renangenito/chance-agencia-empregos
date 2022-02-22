import React from 'react';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import {MdWork, MdHome, MdSearch, MdPerson} from 'react-icons/md'
function NavBar(){
    return(
        <div className={styles.navBar}>
            <div className={styles.navBar_logo}>
                Chance
            </div>
            <div className={styles.navBar_link}>
                <Link to="/">
                <MdWork /> Inicio
                </Link>
            </div>
            <div className={styles.navBar_link}>
                <Link to="/candidaturas">
                <MdHome /> Candidaturas
                </Link>
            </div>
            <div className={styles.navBar_link}>
                <Link to="/vagas">
                <MdSearch /> Vagas
                </Link>
            </div>
            <div className={styles.navBar_link}>
                <Link to="/perfil">
                <MdPerson /> Perfil
                </Link>
            </div>
        </div>
    )
}

export default NavBar;