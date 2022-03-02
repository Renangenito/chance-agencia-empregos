import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { BsBellFill, BsPatchExclamation } from 'react-icons/bs';
import { IoExitOutline } from "react-icons/io5";
import { BiUserMinus } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import styles from './BarraPesquisa.module.css'
function BarraPesquisa({ pagina }) {
    const [showAbaPerfil, setShowAbaPerfil] = useState(false)
    const [showNotificacao, setShowNotificacao] = useState(false)

    function handleAbaPerfil() {
        setShowAbaPerfil(!showAbaPerfil)
    }
    function handleNotificacao() {
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
                    <BsBellFill onClick={handleNotificacao}/>
                    <button onClick={handleAbaPerfil} className={styles.barraPesquisa_botao}>RL</button>
                </div>
            </div>
            {showAbaPerfil && (
                <div className={styles.usuario_modal}>
                    <h5>Conta</h5>
                    <ul>
                        <li><BiUser /> Perfil</li>
                        <li><span><BiUserMinus />Excluir conta</span> </li>
                        <li><IoExitOutline /> Sair</li>
                    </ul>
                </div>
            )}
            {showNotificacao&&(
                 <div className={styles.notificacao_modal}>
                 <h5>Notificação</h5>
                 <ul>
                     <li><p><BsPatchExclamation /> Não há notificação!</p></li>
                 </ul>
             </div>
            )}
        </>
    )
}

export default BarraPesquisa;