import React from 'react';
import BarraPesquisa from '../layout/BarraPesquisa';
import CardVaga from '../layout/CardVaga';
import logoReact from '../../img/logo-react.png'

import styles from './Inicio.module.css'
function Inicio() {
    return (
        <div className={styles.inicio}>
            <BarraPesquisa pagina='Início' />
            <div className={styles.inicio_main}>
                <h1>Bem vindo a Chance. Aqui você encontra diversas vagas de emprego</h1>
                <p>Últimas vagas candidatas</p>
            </div>
            <div className={styles.vagas_main_cards}>
            <CardVaga vaga='Desenvolvedor Front-end' alt='react' logo={logoReact}
                    cidade='Suzano' estado='São Paulo' tipo='Remoto' contrato='CLT'  candidatura='Candidatura Confirmada' quando='há 3 dias'/>
        </div>
        </div>
    )
}

export default Inicio;