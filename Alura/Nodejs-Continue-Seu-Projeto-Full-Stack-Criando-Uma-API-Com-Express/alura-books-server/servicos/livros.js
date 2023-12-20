const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivrosPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    return livros.filter((livro) => livro.id === id)[0]
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {

    let livroAtuais = JSON.parse(fs.readFileSync('livros.json'))

    const indiceModificado = livroAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livroAtuais[indiceModificado], ...modificacoes }

    livroAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync('livros.json', JSON.stringify(livroAtuais))
}

function deletarLivroPorId (id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const livrosFiltrados = livros.filter(livro => livro.id !== id)
    
    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados))
}


module.exports = { getTodosLivros , getLivrosPorId , insereLivro , modificaLivro , deletarLivroPorId }