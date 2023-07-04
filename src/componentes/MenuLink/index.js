import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom'

const MenuLink = (props) => {
    const localizacao = useLocation();

    return (
        <Link to={props.pagina} className={`
        ${localizacao.pathname === props.linkPagina ? styles.link_ativo : styles.link}
        `}>{props.texto}</Link>
    )
}

export default MenuLink