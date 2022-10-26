---
theme: apple-basic
layout: intro
lineNumbers: true
---

# Presentation title

Uma visão prática sobre a nossa stack de front-end

---

# Recados importantes

---

# Por que estamos aqui?

- Compartilhar os aprendizados dos nossos últimos meses
- Nivelar o conhecimento de todos
- Tornar o time produtivo o mais rápido possível
- Conseguirmos entregar o novo projeto no tempo que precisamos
- Tornar nosso time mais unido

---
layout: image-right
image: hide-the-pain-harold--heart.jpg
---

# O que vamos ver nos próximos dias?

- React
- Nextjs
- Typescript
- Stitches
- Radix
- SWR
- Storybook
- Testes
- Github Actions?
- Deploy na Vercel
- Os problemas da nossa stack
- O futuro do NextJS

<!--
- Para conseguirmos usar o Next.js de forma efetiva, precisamos nos familiarizar com JavaScript. React e os paranauês do desenvolvimento web
- A ideia é entendermos um pouco mais sobre essa biblioteca incrível que está nos nossos corações
- Vamos construirá um projeto simples passo a passo e evoluir ele aos poucos
-->

---
layout: statement
---

# Vamos começar?

---
layout: center
---

# Coisas que precisamos levar em consideração quando estamos criando aplicação web

- Interface do usuário - como os usuários consumirão e interagirão com seu aplicativo.
- Roteamento - como os usuários navegam entre as diferentes partes.
- Busca de dados - onde e como obter os dados que precisamos.
- Renderização - quando e onde você renderiza conteúdo estático ou dinâmico.
- Desempenho - como otimizar o projeto para usuários finais.
- Escalabilidade - como seu aplicativo se adapta à medida que sua equipe, dados e tráfego crescem.
- Experiência do desenvolvedor - a experiência de sua equipe na construção e manutenção do projeto.

---
layout: center
---

# O que é React?

React é uma biblioteca JavaScript para criar interfaces de usuário

![](example--user-interface.png)

<!--
- Por interfaces de usuário, queremos dizer os elementos que os usuários veem e interagem na tela.
- o React dá funções úteis para construir a interface, mas deixa quem desenvolve escolher onde onde usar essas funções em seu aplicativo.
-->
---
layout: center
---
# O React é não opinativo

<!--
- Não diz exatamente como as aplicações devem ser construídas
- só dá algumas ferramentas, o resto você precisa se virar
- Configurar uma aplicação do React do zero, na mão, exige bastante esforço
domínio de algumas ferramentas que não são relativamente tão simples de aprender
como compiladores e bundlers (babel e webpack)
- No passado, cada aplicação que a gente trabalhava resolvia problemas comuns de formas diferentes
-->
---
layout: center
---
# O que é Next.js?

- É um framework React
- Eleva as qualidades do React e está fazendo ele evoluir
- Ele é flexível
- Fornece as ferramentas necessárias para construir aplicações modernas e rápidas
- Resolve problemas de aplicações reais como indexação de conteúdo da página pelos motores de busca
- Fornece a estrutura, recursos e otimizações que geralmente precisamos
- tudo isso enquanto melhora a experiência do desenvolvedor e do usuário final

---
title: Imagem Nextjs
layout: image
---

![](example--nextjs.png)

<!--
### Sobre ser framework

É considerado um framework por adicionar várias funcionalidades em cima do React como:
- Sistema de roteamentos
- Convenção para realizar a busca de dados
- Formas de lidar com imagens
- Possui o próprio ferramental de build

### Sobre estar fazendo o react evoluir

A equipe do Nextjs e do core do React estão em estreita colaboração
-->
---
layout: section
---

# O Navegador

<!-- 
- Para entender como o React funciona, primeiro precisamos de um entendimento básico de como os navegadores interpretam seu código para criar interfaces de usuário interativas (UI).

- Quando um usuário visita uma página da web, o servidor retorna um arquivo HTML para o navegador que pode ter esta aparência:
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

Vamos ver como você pode usar o JavaScript e o DOM para `h1` tag em uma página.

<!--
- veja o exemplo-02
-->

---
title: Exemplo de como manipular o DOM
src: ./pages/example-02/entry.md
---

---

# HTML vs DOM

![](example--html-vs-dom.png)

---
layout: section
---

- O HTML representa o conteúdo inicial da página, que foi baixado pelo browser
- O DOM representa o conteúdo atualizado da página
---
layout: center
---
## Os problemas do nosso código

- Atualizar o DOM com JavaScript é muito poderoso, mas está longe de ser simples
- Muitas vezes, o código fica repetitivo e massivo
- À medida que o tamanho do nosso código ou equipe cresce, fica mais difícil de escalar
- Escrever testes se torna um desafio
- Fica mais difícil de manter 
- Com o tempo e começamos a apanhar do nosso código

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


---
