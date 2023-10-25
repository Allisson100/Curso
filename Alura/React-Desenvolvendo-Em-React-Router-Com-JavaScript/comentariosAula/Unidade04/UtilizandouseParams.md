# Utilizando useParams

Renomeamos o componente Post para PostCard, pois agora eu quero utilizar o nome Post para outro componente. Nele será renderizado o conteúdo de cada noticia que temos na página inicial do projeto.

O arquivo post está assim por enquanto:

    import { useParams } from "react-router-dom"

    export default function Post () {

        const parametros = useParams()
        console.log(parametros);

        return (
            <h1>POsts {parametros.id}</h1>
        )
    }

Utilizamos um dos hooks do react-router-dom para saber qual é o id que está na rota.

E envolvemos cada PostCard em Links do react-router-dom:

    import { Link } from 'react-router-dom'
    import styles from './Post.module.css'

    export default function PostCard ({ post }) {
        return (
            <Link to={`/posts/${post.id}`}>
                <div className={styles.post}>
                    <img
                        className={styles.capa}
                        src={`/assets/posts/${post.id}/capa.png`}
                        alt="Imagem de capa do post"
                    />

                    <h2 className={styles.titulo}>{post.titulo}</h2>

                    <button className={styles.botaoLer}>Ler</button>
                </div>
            </Link>
        )
    }

E também adicionamos uma nova rota:

    function AppRoutes() {
        return (
            <BrowserRouter>

            <Menu />

            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Inicio />}/>
                    <Route path='sobremim' element={<SobreMim />}/>
                    <Route path='posts/:id' element={<Post />}/>
                </Route>

                <Route path='*' element={<h1>ERROOOO</h1>}/>
            </Routes>

            <Rodape />
            </BrowserRouter>
        );
    }
