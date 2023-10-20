# Importando ícone de deletar

- Vamos utilizar a biblioteca react icons para trocar o nome deletar por um icone.

Para instalar digitamos:

    npm install react-icons --save

No nosso componente colaborador exportamos o icone e usamos ele:

    import {AiFillCloseCircle} from 'react-icons/ai'

    <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />

A propriedade size serve para redimensionar o icone.

Na parte de exportação colocamos /ai, esse ai é a pasta dos icons da biblioteca, mas para sabermos qual pasta correta exportar, basta ver as iniciais do nome do icone que nesse caso era ai. O nome do icone pegamos diretamente do site do React Icons.

Com isso criamos o icone, mas falta acrescentar a funcioalidade ainda nele.
