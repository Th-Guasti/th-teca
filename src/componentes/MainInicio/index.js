import styles from './MainInicio.module.css'
const MainInicio = () => {
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>Descubra a THteca: sua biblioteca digital personalizada</h1>
            <ul className={styles.ul}>
                <li>Explore nosso acervo de livros</li>
                <li>Acesse de qualquer dispositivo</li>
                <li>Uma experiência de leitura única ao seu alcance</li>
            </ul>
            <h3 className={styles.h3}>"Um livro é um sonho que você segura em suas mãos." - Neil Gaiman</h3>
        </div>
    );
}

export default MainInicio