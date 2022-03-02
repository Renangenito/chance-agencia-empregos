
import React from 'react';
import BarraPesquisa from '../layout/BarraPesquisa';
import styles from './Vagas.module.css';
import logoReact from '../../img/logo-react.png'
import logoAngular from '../../img/logo-angular.png'
import logoVue from '../../img/logo-vue.png'
import logoNode from '../../img/logo-node.png'
import CardVaga from '../layout/CardVaga';

function Vagas() {
    return (
        <div className={styles.vagas}>
            <BarraPesquisa pagina='Vagas' />
            <div className={styles.vagas_main}>
                <CardVaga vaga='Desenvolvedor Front-end' alt='react' logo={logoReact}
                    cidade='Suzano' estado='São Paulo' tipo='Remoto' contrato='CLT' quando='há 3 dias' />

                <CardVaga vaga='Desenvolvedor Angular' alt='angular' logo={logoAngular}
                    cidade='Mogi das Cruzes' estado='São Paulo' tipo='Presencial' contrato='CLT' quando='há 3 dias' />

                <CardVaga vaga='Desenvolvedor Back-end' alt='node' logo={logoNode}
                    cidade='Salvador' estado='Bahia' tipo='Remoto' contrato='PJ' quando='há 2 dias' />

                <CardVaga vaga='Desenvolvedor Front-end' alt='vue' logo={logoVue}
                    cidade='São Paulo' estado='São Paulo' tipo='Híbrido' contrato='CLT/PJ' quando='há 5 dias' />
                <CardVaga vaga='Desenvolvedor Angular' alt='angular' logo={logoAngular}
                    cidade='Mogi das Cruzes' estado='São Paulo' tipo='Presencial' contrato='CLT' quando='há 1 semana' />

                <CardVaga vaga='Desenvolvedor Back-end' alt='node' logo={logoNode}
                    cidade='Salvador' estado='Bahia' tipo='Remoto' contrato='PJ' quando='há 10h' />

                <CardVaga vaga='Desenvolvedor Front-end' alt='vue' logo={logoVue}
                    cidade='São Paulo' estado='São Paulo' tipo='Híbrido' contrato='CLT/PJ' quando='há 8 dias' />

                <CardVaga vaga='Desenvolvedor Front-end' alt='react' logo={logoReact}
                    cidade='Suzano' estado='São Paulo' tipo='Remoto' contrato='CLT' quando='há 1 dia' />

                <CardVaga vaga='Desenvolvedor Back-end' alt='node' logo={logoNode}
                    cidade='Salvador' estado='Bahia' tipo='Remoto' contrato='PJ' quando='há 2 dias' />



            </div>
        </div>
    )
}

export default Vagas;