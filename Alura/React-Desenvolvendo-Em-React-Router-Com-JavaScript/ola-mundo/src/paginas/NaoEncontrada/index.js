import BotaoPrincipal from 'components/BotaoPrincipal'
import styles from './NaoEncontrada.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada () {

    const navegar = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, beatae nam dolor porro iusto accusamus autem at itaque temporibus rerum facere fugiat nobis doloribus odio, expedita vel. Repudiandae, quo illum.
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>

                <img 
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humanos" 
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}