import React, { useEffect, useState } from 'react';
import livros from "../../json/livros.json";
import { Link } from 'react-router-dom';
import styles from './ListagemLivros.module.css';
import livro1 from '../../img/livro 1.jpg';
import livro2 from '../../img/livro 2.jpg';
import livro3 from '../../img/livro 3.jpg';
import livro4 from '../../img/livro 4.jpg';
import livro5 from '../../img/livro 5.jpg';

const ListagemLivros = () => {
  const capaLivro = [
    {
      src: livro1
    },
    {
      src: livro2
    },
    {
      src: livro3
    },
    {
      src: livro4
    },
    {
      src: livro5
    }
  ];

  const [dadosLivros, setDadosLivros] = useState([]);

  useEffect(() => {
    setDadosLivros(livros.map((livro, index) => ({
      ...livro,
      src: capaLivro[index].src
    })));
  }, []);

  return (
    <div className={styles.boxLivros}>
      {dadosLivros.map(livro => (
        <div className={styles.listaLivros}>
          <img src={livro.src} className={styles.livroListado} alt="imagem livros" />
          <Link to={`/livro/${livro.id}`} className={styles.p}>{livro.texto}</Link>
        </div>
      ))}
    </div>
  );
};

export default ListagemLivros;
