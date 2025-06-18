import styles from './footer.module.css'
import { FaPhoneSquareAlt } from "react-icons/fa";


function Footer() {
    return (
        <footer className={styles.footer}>
            Turminha 2DS 2025 do Will <a href="/Pages/Contatos/index.jsx"><FaPhoneSquareAlt /></a>
            </footer>
    )
}
export default Footer