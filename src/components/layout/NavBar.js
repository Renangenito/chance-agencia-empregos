import React from 'react';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <div className={styles.navBar}>
            <div className={styles.navBar_logo}>
                chance
            </div>
            <div >
                <Link to="/">
                    Inicio
                </Link>
            </div>
            <div >
                <Link to="/candidaturas">
                Candidaturas
                </Link>
            </div>
            <div >
                <Link to="/vagas">
                Vagas
                </Link>
            </div>
            <div>
                <Link to="/perfil">
                    Perfil
                </Link>
            </div>
        </div>
    )
}

export default NavBar;