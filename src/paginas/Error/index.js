import style from './Error.module.css'

const Erro = () => {
    return (
        <div className={style.box}>
            <h1 className={style.titulo}>Error404 - Not Found</h1>
            <a href='/' className={style.link}>Voltar ao início</a>
        </div>
    )
}

export default Erro