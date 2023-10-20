# Criando favorito

    function resolverFavorito (id) {
        setColaboradores(colaboradores.map(colaborador => {
            if(colaborador.id === id) {
                colaborador.favorito = !colaborador.favorito
            }

            return colaborador
        }))
    }

    function favoritar () {
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar,
    }

    {colaborador.favorito
        ? <AiFillStar {... propsfavorito} color='#F5ED00'/>
        : <AiOutlineStar {... propsfavorito}/>
    }

Utilizamos essas linhas de código para criar o botão favorito e aprendemos também como passar um objeto como porps de um componente.
