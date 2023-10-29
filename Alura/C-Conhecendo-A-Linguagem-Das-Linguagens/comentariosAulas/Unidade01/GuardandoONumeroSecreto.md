# Guardando o número secreto

Aprendemos a criar variáveis e printar elas na tela/terminal:

    #include <stdio.h>

    int main()
    {
        printf("******************************************\n");
        printf("* Bem vindo ao nosso jogo de adivinhação *\n");
        printf("******************************************\n");

        int numerosecreto = 42;

        printf("O número %d é o secreto!\n", numerosecreto);
    }
