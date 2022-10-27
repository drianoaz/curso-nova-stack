---
layout: statement
---

# O Navegador

<!-- 
- Para entender como o React funciona, primeiro precisamos de um
entendimento básico de como os navegadores interpretam seu código
para criar interfaces de usuário interativas (UI).
- Quando um usuário visita uma página da web, o servidor retorna
um arquivo HTML para o navegador que pode ter esta aparência:
-->

---
title: Imagem representação do DOM
layout: image
image: example--html-dom.png
---

<!--
- mostrar exemplo-01
- O navegador então lê o HTML e constrói o Document Object Model (DOM).
-->

---
layout: center
---

# O que é o DOM?

- O DOM é uma representação em forma objeto dos elementos HTML
- Ponte entre o código e a interface
- Estrutura semelhante a uma árvore
- Alocado na memória do computador

---
layout: center
---
## O que é possível fazer com o DOM?

Usando JavaScript e criatividade <twemoji-see-no-evil-monkey /> da pra fazer bastante coisa:

- Ouvir eventos de usuários
- Manipulador o DOM - Adicionar, atualizar e excluir elementos na interface do usuário
- Alterar o estilo de um elemento na página
- Alterar o conteúdo

<!-- 
- Praticamente tudo que é interativo em uma página depende do DOM
-->

---
title: Imagem abraçando uma ávore
layout: image
image: giphy--tree-hug.gif
---
<!-- 
- Basicamente a nossa profissão existe por causa disso
- E se hoje você ganha dinheiro é basicamente por causa do DOM
-->

---
layout: center
class: font-size-50
---
# Utilizando o DOM

Vamos ver como você pode usar o JavaScript e o DOM para inserir uma tag `h1` em uma página.

<!--
- veja o exemplo-02
-->

---
title: Exemplo de como manipular o DOM
src: ./pages/example-02/entry.md
---

---

# HTML vs DOM

![](/example--html-vs-dom.png)

---
layout: section
---

- O HTML representa o conteúdo inicial da página, que foi baixado pelo browser
- O DOM representa o conteúdo atualizado da página
---
layout: center
---
## Os problemas do nosso código <twemoji-thinking-face />

- Atualizar o DOM com JavaScript é muito poderoso, mas está longe de ser simples
- Muitas vezes, o código fica repetitivo e massivo
- À medida que o tamanho do nosso código ou equipe cresce, fica mais difícil de escalar e manter
- Escrever testes se torna um desafio
- Com o tempo e começamos a apanhar do nosso código
- Um ótimo exemplo dessa dor é o nosso checkout <twemoji-clown-face />

---
title: Imagem de uma árvore batendo
layout: image
image: giphy--tree-hurt.gif
---

---
layout: center
---

# Programação Imperativa x Declarativa

<br />

## A programação imperativa é como dar a um chef instruções passo a passo sobre como fazer uma pizza.

<br />

## A programação declarativa é como pedir uma pizza sem se preocupar com os passos necessários para fazer ela. 

<!--
- O código que fizemos antes é um bom exemplo de programação imperativa
- Estamos escrevendo, passado a passo, como a interface do usuário deve ser atualizada
- A abordagem declarativa geralmente é melhor. Em vez de ter que escrever métodos DOM, seria mais simples
se a gente pudesse declarar o que queremos ver, sem termos que nos preocupar com tudo isso de detalhes
-->
