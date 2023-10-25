# Utilizando rotas aninhadas

Aprendemos o conceito de roras aninhadas.

Nosso arquivo toutes.js ficou assim:

    import { BrowserRouter, Route, Routes } from 'react-router-dom'
    import Inicio from './paginas/Inicio'
    import SobreMim from './paginas/SobreMim';
    import Menu from './components/Menu';
    import Rodape from 'components/Rodape';
    import PaginaPadrao from 'components/PaginaPadrao';

    function AppRoutes() {
    return (
        <BrowserRouter>

        <Menu />

        <Routes>
            <Route path='/' element={<PaginaPadrao />}>
                <Route path='/' element={<Inicio />}/>
                <Route path='/sobremim' element={<SobreMim />}/>
            </Route>

            <Route path='*' element={<h1>ERROOOO</h1>}/>
        </Routes>

        <Rodape />
        </BrowserRouter>
    );
    }

    export default AppRoutes;

Criamos essa rota aninhada:

    <Route path='/' element={<PaginaPadrao />}>
        <Route path='/' element={<Inicio />}/>
        <Route path='/sobremim' element={<SobreMim />}/>
    </Route>

Basicamente conseguimos criar um layout padrõ para ambas as rotas, porém com conteúdos diferentes entre elas. Nosso arquivo da PaginaPadrao está assim:

    import Banner from "components/Banner";
    import { Outlet } from "react-router-dom";

    export default function PaginaPadrao () {
        return (
            <main>
                <Banner />

                <Outlet />
            </main>
        )
    }

A taga <Outlet /> serve justamente para renderizar os conteúdos específicos de cada tag.

O arquivo index do Inicio está assim:

    import styles from './Inicio.module.css'
    import Post from 'components/Post';

    import posts from 'json/posts.json'

    export default function SobreMim () {
        return (
            <ul className={styles.posts}>
                {posts.map((post) =>(
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
        )
    }

É como se além do layout padrão, o react vai adicionar esse código da página Inicio.
