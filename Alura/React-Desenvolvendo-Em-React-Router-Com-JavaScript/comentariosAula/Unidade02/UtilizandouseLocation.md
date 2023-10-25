# Utilizando useLocation

Melhoramos o código do menu e utilizamos o hook que vem junto com a biblioteca react-router-dom que se chama useLocation():

Menu:

    import styles from './Menu.module.css'
    import MenuLink from '../MenuLink';

    export default function Menu () {

        return (
            <header>
                <nav className={styles.navegacao}>
                    <MenuLink to="/">Inicio</MenuLink>
                    <MenuLink to="/sobremim">Sobre Mim</MenuLink>
                </nav>
            </header>
        )
    }

MenuLink:

    import { Link, useLocation } from 'react-router-dom'
    import styles from './MenuLink.module.css'

    export default function MenuLink ({children , to}) {

        const localizacao = useLocation()

        return (
            <Link
                to={to}
                className={`${styles.link} ${localizacao.pathname === to && styles.linkDestacado}`}
            >
                {children}
            </Link>
        )
    }
