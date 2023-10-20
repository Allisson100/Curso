# Criando o state times

Temos que mudar a const times para uma variável de estado.

Adicionamos mis uma parte da funcionalidade.

Arquivo index.js do componente Time:

    <input onChange={evento => mudarCor(evento.target.value, time.nome)} type="color" value={time.corSecundaria} className='input-cor' />

Funções para a funcionalidade que estão no arquivo App.js:

    function mudarCorDoTime (cor, nome) {
        setTimes(times.map((time) => {
            if(time.nome === nome) {
                time.corSecundaria = cor
            }

            return time
        }))
    }
