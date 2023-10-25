# Desenvolvendo Inicio

Criamos a parte dos posts e o rodapé.

Index do Inicio:

    import styles from './Inicio.module.css'
    import Banner from "components/Banner";
    import Post from 'components/Post';

    import posts from 'json/posts.json'

    export default function SobreMim () {
        return (
            <main>
                <Banner />
                <ul className={styles.posts}>
                    {posts.map((post) =>(
                        <li key={post.id}>
                            <Post post={post}/>
                        </li>
                    ))}
                </ul>
            </main>
        )
    }

Componente Post:

    import styles from './Post.module.css'

    export default function Post ({ post }) {
        return (
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <button className={styles.botaoLer}>Ler</button>
            </div>
        )
    }

Rodape:

    import styles from './Rodape.module.css'
    import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

    export default function Rodape () {
        return (
            <footer className={styles.rodape}>
                <MarcaRegistrada />

                Desenvolvido por Alura.
            </footer>
        )
    }

Lembrando que o radape assim como o header, foram renderizados fora das rotas do arquivo routes.js, pois queremos que esses dois componentes ejam renderizados em todas as rotas do projeto.
