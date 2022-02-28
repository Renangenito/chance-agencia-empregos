import React from 'react'
import styles from './CardVaga.module.css'

function CardVaga({ vaga, logo, alt, cidade, estado, tipo, contrato, candidatura, quando }) {
   
    return (
        <div className={styles.vagas_card}>
            <div className={styles.vagas_card_logo}>
                <img src={logo} alt={alt} />
            </div>
            <div className={styles.vagas_card_conteudo}>
                <h4>{vaga}</h4>
                <p className={styles.vagas_p_localizacao}>{cidade} - {estado} <span>{tipo}</span></p>
                <p >{quando} - {contrato}</p>
                <span className={styles.vagas_card_candidatura}>{candidatura}</span>
            </div>

        </div>
    )
}

export default CardVaga;