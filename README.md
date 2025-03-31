# trabHTML

# Projeto de Navegação Interativa - Trabalhando com Front-End

Este é um projeto de navegação interativa que utiliza HTML, CSS e JavaScript para criar uma interface de viagem. Ele inclui animações e transições entre imagens e textos relacionados a destinos turísticos.

## Descrição

O projeto apresenta uma interface com uma lista de destinos turísticos. O usuário pode navegar pelas imagens e informações dos destinos utilizando setas de navegação. Cada destino possui uma imagem principal, um título, uma descrição e dois botões: "Saiba Mais" e "Acessar". Além disso, há uma seção com miniaturas dos destinos, que também podem ser navegadas.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilos e animações para a interface.
- **JavaScript**: Lógica para a navegação e animações entre as imagens.

## Como Funciona

### HTML

A estrutura HTML é composta por:

- Um `header` com links de navegação.
- Uma `main` que contém:
  - Uma lista de itens (destinos turísticos) com imagens e descrições.
  - Miniaturas (`tumb`) dos destinos.
  - Setas de navegação (`back` e `next`).

### CSS

O estilo é projetado para fornecer uma interface moderna com:

- Layout flexível.
- Imagens ajustadas corretamente com `object-fit`.
- Efeitos de transição e animação para movimentar as imagens e os conteúdos dos destinos.
- Design responsivo com fontes da Google Fonts (Poppins).

### JavaScript

A lógica de navegação é controlada por JavaScript. Quando o usuário clica nas setas (`next` ou `back`), a função `moveItemsOnClick` é chamada para animar os itens da lista e das miniaturas. A navegação é feita com transições suaves e atualiza o conteúdo visível.

## Instalação

1. Clone ou faça o download deste repositório.
2. Abra o arquivo `index.html` em seu navegador.


