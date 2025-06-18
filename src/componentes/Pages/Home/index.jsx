import { Link } from 'react-router-dom'
import imagemHome from '../../../assets/img1.svg'
import imagemHome2 from '../../../assets/img2.svg'
import Container from '../../Container'
import styles from './Home.module.css'

function Home() {
    return (
        <Container>
            <section className={styles.home}>
                <div className={styles.apresentacao}>    
                    <p>
                    Olá, somos <br />
                    <span>Seus Amiguinhos, Elizabete e Maria Clara</span> <br />
                    Devs Full Stack
                  </p>
                  <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais sobre nós!
                  </Link>
                </div>
                <figure>
                  <img className="img-home" src={imagemHome} alt="Imagem da Home" />
                </figure>

                <figure>
                  <img className="img-home" src={imagemHome2} alt="Imagem da Home" />
                </figure>
            </section>
        </Container>
    )
}
export default Home

