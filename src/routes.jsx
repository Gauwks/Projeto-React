import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './componentes/Pages/Home'
import Sobre from './componentes/Pages/Sobre'
import Projetos from './componentes/Pages/Projetos'
import Contatos from './componentes/Pages/Contatos'
import Header from './componentes/header'
import Footer from './componentes/Footer'

function AppRoutes(){
    return(
        <BrowserRouter> 
            <Header />
            <section className='container'>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/sobre" element={<Sobre />}></Route>
                    <Route path="/projetos" element={<Projetos />}></Route>
                    <Route path="/contatos" element={<Contatos />}></Route>
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
    )
}
export default AppRoutes
