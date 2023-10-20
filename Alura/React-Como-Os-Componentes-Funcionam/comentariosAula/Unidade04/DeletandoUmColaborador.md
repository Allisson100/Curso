# Deletando um colaborador

Apenas implemantamos a funcionalidade de deletar:

    function deleteColaborador (id) {
        setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id))
    }

    <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
