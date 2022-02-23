import React from 'react';
import { MdSearch } from 'react-icons/md';
import { BsBellFill } from 'react-icons/bs';
import styles from './BarraPesquisa.module.css'
function BarraPesquisa({pagina}){
    return(
            <div className={styles.barraPesquisa}>
            <h1>{pagina}</h1>
            <div className={styles.search}>
                <MdSearch />
                <input alt='search' type='search' />
            </div>
                <BsBellFill/>
            </div>
    )
}

export default BarraPesquisa;