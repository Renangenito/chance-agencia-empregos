import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { BsBellFill } from 'react-icons/bs';
import { IoExitOutline } from "react-icons/io5";
import { BiUserMinus } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import styles from './BarraPesquisa.module.css'
function BarraPesquisa({ pagina }) {
    const [showNotificacao, setShowNotificacao] = useState(false)

    function handleNotificacao(){
        setShowNotificacao(!showNotificacao)
    }


    return (

        <>
            <div className={styles.barraPesquisa}>
                <h1>{pagina}</h1>
                <div className={styles.search}>
                    <MdSearch />
                    <input alt='search' type='search' />
                </div>
                <div className={styles.usuario}>
                    <BsBellFill />
                    <button onClick={handleNotificacao} className={styles.barraPesquisa_botao}>RL</button>
                </div>
            </div>
            {showNotificacao &&(
                <div className={styles.usuario_modal}>
                <h5>Conta</h5>
                <ul>
                    <li><BiUser /> Perfil</li>
                    <li><span><BiUserMinus />Excluir conta</span> </li>
                    <li><IoExitOutline /> Sair</li>
                </ul>
            </div>
            )}
        </>
    )
}

export default BarraPesquisa;