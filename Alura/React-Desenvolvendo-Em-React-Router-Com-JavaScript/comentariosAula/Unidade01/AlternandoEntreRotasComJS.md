# Alternando entre rotas com JS

    console.log(window.location)

Esse console.log nos mostra informações sobre a rotas em que estamos.

    console.log(window.location)

    const pagina = window.location.pathname === '/' ? <div>Olá Mundo!</div> : <div>Sobre mim ...</div>

    function App() {
        return (
            <div className="App">
                {pagina}
            </div>
        );
    }

    export default App;

Criamos esse exemplo simples para entermos melhora sobre as rotas.

E também utilizamos o exemplo já com alguns componentes:

    import SobreMim from './paginas/SobreMim'
    import Inicio from './paginas/Inicio'

    console.log(window.location)

    const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

    function App() {
        return (
            <div className="App">
                {pagina}
            </div>
        );
    }

    export default App;
