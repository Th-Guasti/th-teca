import styles from './MainLivros.module.css';
import ListagemLivros from '../ListagemLivros'
const MainLivros = () => {

  
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>BOX PERCY JACKSON E OS OLIMPIANOS</h1>
      <ListagemLivros />
    </div>
  );
}

export default MainLivros;