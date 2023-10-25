# Links do react-router-dom

Criamos um componente menu dessa forma:

    import styles from './Menu.module.css'

    export default function Menu () {
        return (
            <header>
                <nav className={styles.navegacao}>
                    <a href="/" className={styles.link}>Inicio</a>
                    <a href="/sobremim" className={styles.link}>Sobre Mim</a>
                </nav>
            </header>
        )
    }

Porém vamnos utilizar algumas ferramentas do react-router-dom para melhorar isso ficando assim:

    import { Link } from 'react-router-dom'
    import styles from './Menu.module.css'

    export default function Menu () {
        return (
            <header>
                <nav className={styles.navegacao}>
                    <Link to="/" className={styles.link}>Inicio</Link>
                    <Link to="/sobremim" className={styles.link}>Sobre Mim</Link>
                </nav>
            </header>
        )
    }
