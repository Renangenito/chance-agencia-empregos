import React from 'react';
import CardVaga from '../layout/CardVaga';
import BarraPesquisaa from '../layout/BarraPesquisa'
import styles from './Vagas.module.css';
import logoReact from '../../img/logo-react.png'
import logoAngular from '../../img/logo-angular.png'

function Candidaturas(){
    return(
       <div className={styles.vagas}>
        <BarraPesquisaa pagina='Candidaturas'/>
        <div className={styles.vagas_main}>
                <CardVaga vaga='Desenvolvedor Front-end' alt='react' logo={logoReact}
                    cidade='Suzano' estado='São Paulo' tipo='Remoto' contrato='CLT'  candidatura='Candidatura Confirmada' quando='há 3 dias' />

                <CardVaga vaga='Desenvolvedor Angular' alt='angular' logo={logoAngular}
                    cidade='Mogi das Cruzes' estado='São Paulo' tipo='Presencial' contrato='CLT' candidatura='Candidatura Confirmada' quando='há 3 dias' />
       </div>
       </div>
    )
}

export default Candidaturas;