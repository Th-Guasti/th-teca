import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Livros from '../Livros'
import jsonLivros from '../../json/livros.json';
import styles from './Descricao.module.css'
import Header from '../../componentes/Header';

const Descricao = () => {
    const { id } = useParams();
    const livro = jsonLivros.find(livro => livro.id === parseInt(id));

    if (!livro) {
        return <div>Livro não encontrado.</div>;
    }

    return (
        <div>
            <Header />
            <div className={styles.card}>
                <div className={styles.div}>
                    <h2 className={styles.h2}>{livro.titulo}</h2>
                    <h3 className={styles.h3}>Autor: {livro.autor}</h3>
                    <p className={styles.p}>Sinopse: {livro.sinopse}</p>
                </div>
            </div>
        </div>
    );
};

export default Descricao;
