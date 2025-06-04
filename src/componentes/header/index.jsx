import styles from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {
return (
    <header className={styles.header}>
    <span> Biblioteca Bem Te Vi </span>

        <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
        <Link to="/"><span></span></Link>
        </nav>
        </header>
    )
}
export default Header