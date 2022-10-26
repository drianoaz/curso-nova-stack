---
theme: apple-basic
layout: intro
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
layout: image
image: example--html-dom.png
---

<!--
- mostrar exemplo-01
- O navegador então lê o HTML e constrói o Document Object Model (DOM).
-->

---

# O que é o DOM?

- O DOM é uma representação em forma objeto dos elementos HTML
