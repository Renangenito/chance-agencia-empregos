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
            <div className={styles.navBar_links}>
                <Link className={styles.navBar_link} to="/">
                <MdHome /> <p>Inicio</p>
                </Link>
            </div>
            <div className={styles.navBar_links}>
                <Link className={styles.navBar_link} to="/candidaturas">
                <MdWork /> <p>Candidaturas</p>
                </Link>
            </div>
            <div className={styles.navBar_links}>
                <Link className={styles.navBar_link} to="/vagas">
                <MdSearch /> <p>Vagas</p>
                </Link>
            </div>
            <div className={styles.navBar_links}>
                <Link className={styles.navBar_link} to="/perfil">
                <MdPerson /> <p>Perfil</p>
                </Link>
            </div>
        </div>
        
    )
}

export default NavBar;