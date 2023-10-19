# JavaScript: tipos, variáveis e funções

Esse curso tem aulas básicas sobre o JavaScript, então vou fazer um arquivo de comentários para todo o curso.

### Introdução

- Explicação sobre tipos primitivos: number, string

Códigos Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(checkbox)
console.log(hiragana)

- Explicação boolean

### Var, let e const

Explicação de var, let e const

### Truthly e falsy

let teste = null

console.log(typeof teste); // retorn aobject, isso é um bug do javascript.

### Conversão de tipos

Ensina conversão de um tipo em outro

### JavaScript e NodeJS

Explicação de ambos.

### Erros e stacktrace

Explicou um pouco sobre os erros

### Console.api

Explica um pouco sobre console.error.

- console.error() para exibir mensagens de erro;

- console.table() para visualizar de forma mais organizada informações tabulares;

- console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;

- console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

### Operadores de comparação

Explicação sobre os (==) e (===).

### Operador ternário

Explicou como utilizar os operadores ternários.

### Template literal

Explica sobre como usar as template strings (``).

### Funções

Explicou sobre funções

    - Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
        Math.round(4.3) retorna 4
        Math.round(3.85) retorna 4
        Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima

    - Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
        Math.ceil(5.2) retorna 6

    - Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
        Math.floor(5.2) retorna 5

    - Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
        Math.trunc(4.3) retorna 4
        Math.trunc(4.8) retorna 4

    - Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
        Math.pow(4 , 2) retorna 4^2 = 16
        Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...

    - Math.sqrt() : Retorna a raiz quadrada de um número.
        Math.sqrt(64) retorna 8

    - Math.min(): Retorna o menor valor entre os argumentos.
        Math.min(0, 150, 30, 20, -8, -200) retorna -200

    - Math.max(): Retorna o maior valor entre os argumentos.
        Math.max(0, 150, 30, 20, -8, -200) retorna 150

    - Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

        Math.random() retorna 0.7456916270759015
        Math.random() retorna 0.15449802102729304
        Math.random() retorna 0.4214269561951203

### Parâmetros e argumentos

Explica os parâmetros

### Expressão de função

Explica sobre escrever as funções através das variáveis.

### Arrow Function

Explica como criar as arrows functions
