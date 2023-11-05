# Introdução

Vamos estudar um pouco sobre objetos

# O que são Objetos

Mostrou um exemplo de objeto.

# Acessando dados

Mostrou como acessá-lo com o ponto(.).

    const cliente = {
        nome: "Andre",
        idade: 33,
        cpf: "00124541",
        email: "nome@dominio.com",
    }

    console.log(`Os três primeiros número do cpf é ${cliente.cpf.substring(0,3)}`)

# Acessando dados com colchetes

Podemos acessar os itens do objeto da seguinte forma também:

    const cliente = {
        nome: "Andre",
        idade: 33,
        cpf: "00124541",
        email: "nome@dominio.com",
    }

    console.log(`Os três primeiros número do cpf é ${cliente["nome"]}`)

# Adicionando e alterando

    const pessoa = {
        nome: "Luma",
        profissao: "Engenheira",
    }

Podemos adicionar uma nova propriedade nesse objeto da seguinte forma:

    pessoa.telefone = "11 55989159"

Agora nosso objeto está dessa forma:

    const pessoa = {
        nome: "Luma",
        profissao: "Engenheira",
        telefone: "11 55989159",
    }

E para modificar um campo que já existe:

    pesoa.nome = "Luma Silva"

E teremos o objeto atualizado:

    const pessoa = {
        nome: "Luma Silva",
        profissao: "Engenheira",
        telefone: "11 55989159",
    }

Para deletar uma propriedade também é simples:

    delete pessoa.telefone

E teremo isso:

    const pessoa = {
        nome: "Luma Silva",
        profissao: "Engenheira",
    }

Quando deletamos pdemos armazenar um valor booleano para sabermos caso quisermos se o valor foi deletado:

    const foiDeletado = delete pessoa.telefone //true ou false

# Tipos de dados e valores

    const cliente = {
        nome: "João",
        idade: 24,
        email: "joao@frim.com",
        telefone: ["1156565656", "116565656"],
    }

# Objetos em objetos

    const cliente = {
        nome: "João",
        idade: 24,
        email: "joao@frim.com",
        telefone: ["1156565656", "116565656"],
    }

    cliente.endereco = {
        rua: "qualuqer endreço aqui",
        numero: 1124,
        apartamento: true,
        complemento: "ap 934",
    }

# Listas de objetos

    cliente.enderecos = [
        {
            rua: "qualuqer endreço aqui",
            numero: 1124,
            apartamento: true,
            complemento: "ap 934",
        },
    ]

    clientes.ederecos.push({
        rua: "qualquer endreço aqui",
        numero: 5897,
        apartamento: false,
    })

    const listaApenasApartamento = cliente.enderecos.filter(
        (endereco) => endereco.apartamento === true
    )

# Funções

    const cliente = {
        nome: "João",
        idade: 24,
        email: "joao@frim.com",
        telefone: ["1156565656", "116565656"],
        saldo: 200,
        efetuaPagamento: function (valor) {
            if(valor > this.saldo) {
                console.log("Saldo insuficiente")
            } else {
                this.saldo -= valor
                console.log(`Pagamento realizado, novo saldo é: ${this.saldo}`)
            }
        }
    }

    cliente.efetuaPagamento(250)

# +Para saber mais: objeto literal e referência

O Object.create() pode nos ajudar a fazer uma cópia de outro objeto, vale ressaltar que fazr const novoObjeto = objPersonagem, só funciona com tipos primitivos do javascript, por isso utilizamos o metodo Object.create().

    const objPersonagem = {
        nome: "Gandalf",
        classe: "mago",
        nivel: "20"
    }

    const objPersonagem2 = Object.create(objPersonagem)
    objPersonagem2.nome = "Gandalf, o Cinzento"

    console.log(objPersonagem.nome) //Gandalf
    console.log(objPersonagem2.nome) //Gandalf, o Cinzento

# for...in

Com esse metodo no for pordemos fazer um forEach porém em um objeto:

    const cliente = {
        nome: "João",
        idade: 24,
        email: "joao@frim.com",
        telefone: ["1156565656", "116565656"],
    }

    cliente.endereco = {
        rua: "qualuqer endreço aqui",
        numero: 1124,
        apartamento: true,
        complemento: "ap 934",
    }

    for (let campo in cliente) {
        console.log(campo) // Retorna os nomes de cada propriedade
    }

    for (let campo in cliente) {
        console.log(cliente[campo]) // Retorna os valores de cada propriedade
    }

# Métodos de objeto

    const cliente = {
        nome: "João",
        idade: 24,
        email: "joao@frim.com",
        telefone: ["1156565656", "116565656"],
    }

    cliente.endereco = {
        rua: "qualquer endreço aqui",
        numero: 1124,
        apartamento: true,
        complemento: "ap 934",
    }

    const chavesDoObjeto = Object.keys(cliente)
    console.log(chavesDoObjeto) // ['nome', 'idade', 'email', 'telefone', 'endereco']

# Sintaxe de espalhamento

    const cliente = {
        nome: "João",
        idade: 24,
        email: "joao@frim.com",
        telefone: ["1156565656", "116565656"],
    }

    cliente.endereco = {
        rua: "qualquer endreço aqui",
        numero: 1124,
        apartamento: true,
        complemento: "ap 934",
    }

    function ligaParaCliente (telefoneComercial, telefoneResidencial) {
        console.log(`Ligando para ${telefoneComercial}`)
        console.log(`Ligando para ${telefoneResidencial}`)
    }

    ligaParaCliente(cliente.telefone[0], cliente.telefone[1])

Podemos chamar a função dessa forma também:

    ligaParaCliente(...cliente.telefone)

Outro exemplo:

    const encomenda = {
        destinatario: cliente.nome,
        ...cliente.endereco[0],
    }

Dessa forma ele espealha o objeto que está dentro de enderecos, o que facilita se não deveriamos fazer o seguinte:

    const encomenda = {
        destinatario: cliente.nome,
        rua: cliente.endereco[0].rua
        // E assim sucessivamente com todos os campos
    }

# O formato JSON

JS normal:

    const cliente = {
        nome: "João",
        idade: 24,
        email: "joao@frim.com",
        telefone: ["1156565656", "116565656"],
        endereco = {
            rua: "qualquer endreço aqui",
            numero: 1124,
            apartamento: true,
            complemento: "ap 934",
        }
    }

JSON:

    {
        "nome": "João",
        "idade": 24,
        "email": "joao@frim.com",
        "telefone": ["1156565656", "116565656"],
        "endereco" = {
            "rua": "qualquer endreço aqui",
            "numero": 1124,
            "apartamento": true,
            "complemento": "ap 934"
        }
    }

- Não é permitido ter uma virgula no último item
- Funções não são permitidas
- Comentários não são permitidos
- Suporta apenas tipos primitivos (string, number, booblean, null)

# Lendo um arquivo JSON

    {
        "nome": "Joao",
        "email": "joao@firma.com",
        "telefone": ["11223344", "11922334453"],
        "endereco": {
            "rua": "R. Joseph Climber",
            "numero": 202,
            "apartamento": true,
            "complemento": "ap 934"
        }
    }

Para acessá-lo digitamos:

    const dados = require("./cliente.json")

# Operações com um JSON

    const dados = require("./cliente.json")

    const clienteEmString = JSON.stringfiy(dados)

    JSON.parse(clienteEmString) // transforma essa string de novo em objeto

# Exercitando o aprendizado

Apenas criamos um aray de objetos

# Encontrando um objeto

    const clientes = require("./jsonEstudos.json")

    function encontrar (lista, chave, valor) {
        return lista.find((item) => item[chave] === valor)
    }

    const encontrado = encontrar(clientes, "nome", "Kirby")

Se a gente tentar obter os dados de alguem passando como parametro o telefone e o numero desse telefone, a função não vai achar ninguem, pois como usamos comparação estrita, uma string é diferente de um array que contém duas strings, então para melhorar nosso código vamos fazer:

    function encontrar (lista, chave, valor) {
        return lista.find((item) => item[chave].includes(valor))
    }

# Filtrando objetos

Pode acontecer de ter usuarios que moram em apartamento e não colocaram o complemento, então para isso vaom criar uma função para filtrar esses usuarios, para posteriormente avisá-los para arrumarem o cadastro.

    const clientes = require("./jsonEstudos.json")

    function filtrarApartamentosSemComplemento (clientes) {
        return clientes.filter((cliente) => {
            return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
        })
    }

    const filtrados = filtrarApartamentosSemComplemento(clientes)

# Ordenando objetos

Vamos criar uma função para conseguirmos ordenar os itens da lista de acordo com a propriedade que queremos.

    const clientes = require("./jsonEstudos.json")

    funtion ordenar (lista, propriedade) {
        const resultado = lista.sort((a,b) => {

            if(a[propriedade] < b[propriedade]) {
                return -1
            }

            if(a[propriedade] > b[propriedade]) {
                return 1
            }

            return 0
        })

        return resultado
    }

Se por acaso quisermos colocar a ordenação de forma inversa podemos utilizar:

    resultado.reverse()
