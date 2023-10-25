import styles from './SobreMim.module.css'

import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/MrBean.png'

export default function Inicio () {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Mr. Wolvebeans
            </h3>

            <img 
                src={fotoSobreMim} 
                alt="Foto do Mr. Wolvebeans" 
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quibusdam quis non laudantium facere dolore nihil voluptatum pariatur voluptatem beatae fugit? Molestiae, provident eius voluptate placeat repudiandae doloremque minima deserunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque voluptatibus nostrum at nam doloribus iusto quaerat libero tempore eius vel, numquam sapiente nulla quibusdam ad distinctio alias. Ipsa, architecto?
            </p>

            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quibusdam quis non laudantium facere dolore nihil voluptatum pariatur voluptatem beatae fugit? Molestiae, provident eius voluptate placeat repudiandae doloremque minima deserunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque voluptatibus nostrum at nam doloribus iusto quaerat libero tempore eius vel, numquam sapiente nulla quibusdam ad distinctio alias. Ipsa, architecto?
            </p>

            <p className={styles.paragrafo}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quibusdam quis non laudantium facere dolore nihil voluptatum pariatur voluptatem beatae fugit? Molestiae, provident eius voluptate placeat repudiandae doloremque minima deserunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque voluptatibus nostrum at nam doloribus iusto quaerat libero tempore eius vel, numquam sapiente nulla quibusdam ad distinctio alias. Ipsa, architecto?
            </p>
        </PostModelo>
    )
}