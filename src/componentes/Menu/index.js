import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

const Menu = () => {
    return (
        <div>
            <div className={styles.links}>
                <MenuLink pagina='/' linkPagina='/' texto='Início' />
                <MenuLink pagina='/livros' linkPagina='/livros' texto='Livros'/>
            </div>
        </div>
    )
}

export default Menu