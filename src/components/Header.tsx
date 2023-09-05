import { Link } from 'react-router-dom'
import { useState } from 'react';
import styles from './Header.module.css'
import Logo from '../assets/logo-black.svg'

export default function Header() {
    const [currentTheme, setCurrentTheme] = useState('light')
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link to="/" className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </Link>
                <nav className={styles.nav}>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/artistas">Artistas</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
                <button className={styles.button} onClick={() => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}>
                    {currentTheme === 'light' ? 'Dark' : 'Light'}
                </button>
            </div>
        </header>
    );
}