import Container from '../../Container'
import Header from '../../header'
import Footer from '../../Footer'
import styles from './Page404.module.css'

function Page404() {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.error404}>
          <h1>404</h1>
          <h2>Página não encontrada</h2>
          <p>A página que você está procurando não existe ou foi removida.</p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Page404;

