# Criando o roteador

Adicionamos os componentes para criar as rotas, lembrando que estamos na versão 6 do react-router-dom:

    import { BrowserRouter, Route, Routes } from 'react-router-dom'
    import Inicio from './paginas/Inicio'
    import SobreMim from './paginas/SobreMim';

    function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />}/>
                    <Route path='/sobremim' element={<SobreMim />}/>
                    <Route path='*' element={<h1>ERROOOO</h1>}/>
                </Routes>
            </BrowserRouter>
        );
    }

    export default App;

O path='\*' é como se fosse um coringa das rotas, ou seja, se por acaso alguma rota com qualuqer outro nome que não seja / ou /sobremim cairá em uma página de erro, normalmente a página 404, mas nesse nosso caso apenas coloquei uma mensagem de errrooo.
