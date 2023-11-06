import styles from './Header.module.css'
import PiCodeLogo from '../assets/picode-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
        <img src={PiCodeLogo} alt="Logotipo da PiCode" />
        <h1>PiCommunity</h1>
        </header>
    );
}