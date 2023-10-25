import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/MrBean.png'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et quidem eius nihil nobis quo totam dolores minima unde ducimus vero quisquam minus, tenetur dolorum. Earum tenetur molestias in eos!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido} 
                    aria-hidden={true} 
                    alt="Imagem de fundo" 
                />

                <img
                    className={styles.minhaFoto} 
                    src={minhaFoto} 
                    alt="Sua foto aqui" />
            </div>
        </div>
    )
}