import { Link } from 'react-router-dom'
import imagemHome from '../../../assets/img1.svg'
import imagemHome2 from '../../../assets/img2.svg'

function Home() {
    return (
        <>
        <div>    
            <p>
            Olá, somos <br />
            <span>Seus Amiguinhos, Elizabete e Maria Clara</span> <br />
            Devs Full Stack
          </p>
          <Link to="/sobre" className='btn btn-red'>
            Saiba mais sobre nós!
          </Link>
        </div>
        <figure>
          <img className="img-home" src={imagemHome} alt="Imagem da Home" />
        </figure>

        <figure>
          <img className="img-home" src={imagemHome2} alt="Imagem da Home" />
        </figure>
        </>
    )
}
export default Home
