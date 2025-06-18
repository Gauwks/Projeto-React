import Container from '../../Container'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";


function Contatos() {
  return (
    <>
     
      <Container>
        <h2>Contatos</h2>
        <p>Entre em contato conosco!
          <ul>
            <li>Instagram (Maria) - <a href="https://www.instagram.com/lemoonn.starsz/"> <SlSocialInstagram /> </a></li>
            <li>Instagram (Elizabete) - <a href="https://www.instagram.com/fromlilibet/#"><SlSocialInstagram /></a></li>
            <li>GitHub (Elizabete) - <a href="https://github.com/Betevi"><SlSocialGithub /></a></li>
            <li>GitHub (Maria) - <a href="https://github.com/Gauwks"><SlSocialGithub /></a></li>
          </ul>
        </p>
      </Container>
    
    </>
  );
}

export default Contatos;

