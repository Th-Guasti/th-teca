import logo from '../../img/logo.png'
import styles from './Logo.module.css'

// const LogoContainer = styled.div`
//     display: flex;
//     font-size: 30px;
// `

// const LogoImage = styled.img`
//     margin-right: 10px;
// `

function Logo() {
    return (
        <div className={styles.boxLogo}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <p><strong>TH</strong>teca</p>
        </div>
    )
}

export default Logo