import {HashRouter, Route, Routes} from "react-router-dom"
import Home from './componentes/Pages/Home'
import Sobre from './componentes/Pages/Sobre'
import Projetos from './componentes/Pages/Projetos'
import Contatos from './componentes/Pages/Contatos'
import Page404 from './componentes/Pages/Page404'
import Header from './componentes/header'
import Footer from './componentes/Footer'

function AppRoutes(){
    return(
        <HashRouter> 
            <Header />
            <section className='container'>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/sobre" element={<Sobre />}></Route>
                    <Route path="/projetos" element={<Projetos />}></Route>
                    <Route path="/contatos" element={<Contatos />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Routes>
            </section>
            <Footer />
        </HashRouter>
    )
}
export default AppRoutes

