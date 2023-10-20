# Mudando o background

Para mudar tanto a cor do Card quanto a cor de fundo, vamos ter que aplicar uma opacidade na cor do fundo para dar a sensação que ambas as cores são diferentes e para isso vamos utilizar um pacote que muda um valor hexadecimal para rgba que se chama hex-to-rgba e para instalá-lo digitamos:

    npm install --save hex-to-rgba

Para utilizá-lo basta importar:

    import hexToRgba from 'hex-to-rgba';

E conseguimos utilizá-lo da seguinte maneira:

    hexToRgba('112233'); // "rgba(17, 34, 51, 1)"
    hexToRgba('#112233'); // "rgba(17, 34, 51, 1)"
    hexToRgba('112233', '0.5'); // "rgba(17, 34, 51, 0.5)"
    hexToRgba('#112233', 0.75); // "rgba(17, 34, 51, 0.75)"

Assim transformamos o valor em hexadecimal do value do input e ainda acrescentamos uma opacidade.

E no index do componente Time fica dessa forma:

    colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.5) }}>
