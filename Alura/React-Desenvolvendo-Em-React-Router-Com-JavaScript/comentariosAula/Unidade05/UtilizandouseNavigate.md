# Utilizando useNavigate

Por enquanto apenas criamos um componente BotaoPrincipal para não ter repetição de código.

    const navegar = useNavigate()

Utilizamos esse hook para conseguirmo navegar pelas nossas rotas.

    <div
        className={styles.botaoContainer}
        onClick={() => navegar(-1)}
    >
        <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
    </div>

Nos utilizamos dessa maneira, pois no onClick ele irá redirecionar para a página anterios, isso utilizando o -1 e poderiamos voltar duas páginas utilizando o -2 e também podemos usar da seguinte forma:

    onClick={() => navegar("/")}

Dessa forma ele redireciona para a rota "/", então podemos usar tanto as rotas que criamos como números.
