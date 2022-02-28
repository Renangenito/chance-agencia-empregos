import React from 'react';
import BarraPesquisa from '../layout/BarraPesquisa';
import styles from './Perfil.module.css';

function Perfil() {
    return (
        <div className={styles.perfil}>
            <BarraPesquisa pagina='Perfil' />
            <div className={styles.perfil_main}>
                <div className={styles.perfil_usuario}>
                    <ul>
                        <li><h3>Renan Lima - 27 anos</h3></li>
                        <li><p>renangenito@hotmail.com</p></li>
                        <li><p>26/05/1994 | Masculino | Casado (a)</p></li>
                        <li><p>446.846.688-00</p></li>
                    </ul>
                    <button>Editar</button>
                </div>
                <div className={styles.perfil_usuario_sobre}>
                    <div>
                        <h4>Descreva o seu peril</h4>
                        <button>Editar</button>
                    </div>
                    <p>Sou desenvolvedor Front-end há quase 2 anos, com perfil hand-son, fiz migração de carreira e tenho me dedicado em obter maior conhecimento através de cursos e pesquisas.
                        Pratico e registro todo meu progresso no GitHub.
                        Tenho adquirido conhecimentos em diversas tecnologias como: React, Javascript, Bootstrap, UI, Wordpress e TypeScript;
                        Banco de Dados: MySQL, Oracle.
                        Atualmente estou participando de uma formação em Back-end com C#.Net. </p>
                </div>
                <div className={styles.perfil_usuario_sobre}>
                    <div>
                        <h4>Onde você mora</h4>
                        <button>Editar</button>
                    </div>
                    <h4>Cidade</h4>
                    <p>Poá</p>
                    <h4>Estado</h4>
                    <p>São Paulo</p>
                    <h4>Bairro</h4>
                    <p>Odete</p>
                </div>
                <div className={styles.perfil_usuario_sobre}>
                    <div>
                        <h4>Telefones para contato</h4>
                        <button>Editar</button>
                    </div>
                    <h4>Celular</h4>
                    <p>(11) 94939-1753</p>
                    <h4>Telefone</h4>
                    <p>(11) 4638-8173</p>
                </div> <div className={styles.perfil_usuario_sobre}>
                    <div>
                        <h4>Redes sociais</h4>
                        <button>Editar</button>
                    </div>
                    <h4>Linkedin</h4>
                    <p>https://www.linkedin.com/in/renan-lima-dev/</p>
                    <h4>Portifólio</h4>
                    <p>https://github.com/Renangenito</p>
                </div>
            </div>
        </div>
    )
}

export default Perfil;