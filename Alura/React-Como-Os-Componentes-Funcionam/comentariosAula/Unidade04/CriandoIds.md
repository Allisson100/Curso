# Criando ids

Vamos utilizar o pacote uuid, para instalá-lo digitamos:

    npm i uuid

Para importar ele no projeto digitamos:

    import { v4 as uuidv4 } from 'uuid';

E utilizamos ele dessa forma:

    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },

### Informações adicionais

React é One way Data binding e outros frameworks são Two Way Data Biding e é por ele ser One way é que traz tanta performance para o código.
