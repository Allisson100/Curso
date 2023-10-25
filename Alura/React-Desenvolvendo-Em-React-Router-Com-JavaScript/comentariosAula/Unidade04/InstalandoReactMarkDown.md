# Instalando React MarkDown

Vamos instalar e utilizar o react-markdown para nos ajudar na parte do texto, pois queremos mostrar titulo, links e outras coisas presentes no texto e a markdown pode no ajudar com isso.

Para instalá-la digitamos:

    npm install react-markdown

Utilizamos ela da seguinte forma

    import './Post.css'

    import { useParams } from "react-router-dom"
    import posts from 'json/posts.json'
    import PostModelo from "components/PostModelo"

    import ReactMarkdown from 'react-markdown'

    export default function Post () {

        const parametros = useParams()
        const post = posts.find((post) => {
            return post.id === Number(parametros.id)
        })

        return (
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
        )
    }

Nós utilizamos um componente que da biblioteca e colocamos ele entre o texto em markdown.

Com o texto em markdown não conseguimos aplicar classes para eles, então por isso devemos utilizar um arquivo css padrão, pois desse jeito ele pode ser utilizado globalmente vamos dizer assim. E quando o texto for convertido de markdown para as tags html, essas tags vão pegar a estilização.
