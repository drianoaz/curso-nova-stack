---
layout: center
---

# O que é React?

O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. 
Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.

![](/example--user-interface.png)

<!--
- Por interfaces de usuário, queremos dizer os elementos que os usuários veem e interagem na tela.
- o React dá funções úteis para construir a interface, mas deixa quem desenvolve escolher onde onde usar essas funções em seu aplicativo.
- você pode dizer ao React o que deseja que aconteça com a interface do usuário, e o React descobrirá as etapas de como atualizar o DOM pra você.
-->

---
layout: center
---
# Vamos refazer nosso exemplo usando React

---
src: pages/example-03/entry.md
---

---
layout: center
---

# Conceitos principais do React

- Componentes
- Propriedades
- Estado

<!--
- Existem três conceitos principais do React com os quais você precisa estar familiarizado para começar a trabalhar com React.
-->

---

# Componentes

![](/example--components.png)

---

# Componentes

- As interfaces podem ser divididas em blocos de construção menores chamados **componentes**
- Os componentes permitem que você crie trechos de código reutilizáveis e independentes
- São como peças de lego que combinamos pra formar coisas maiores
- tudo na tela pode ser dividido em componentes
- Os componentes podem ser tão pequenos quanto um botão ou tão grandes quanto uma página inteira
- Essa separação permite permite que seu código seja mais simples de dar manutenção à medida que cresce
porque conseguimos adicionar, atualizar e excluir componentes sem tocar no restante do nosso projeto

---
layout: image
image: example--components-tok01.png
---

---
layout: image
image: example--components-tok02.png
---

---
layout: image
image: example--components-tok03.png
---

---
layout: center
---

![](/meme--components.jpg)

---
src: pages/example-04/entry.md
---

---
src: pages/conteudo/jsx-regras/entry.md
---

---
src: pages/conteudo/jsx-chaves/entry.md
---

---
src: pages/conteudo/jsx-props/entry.md
---

---
src: pages/conteudo/jsx-condicoes/entry.md
---

---
src: pages/conteudo/jsx-listas/entry.md
---


---
layout: section
---
# O React é não opinativo

## e isso tem seus problemas

<!--
- Não diz exatamente como as aplicações devem ser construídas, não resolve todas as dores mencionadas anteriormente
- só dá algumas ferramentas, o resto você precisa se virar
- Configurar uma aplicação do React do zero, na mão, exige bastante esforço e
domínio de algumas ferramentas que não são relativamente tão simples de aprender
como compiladores e bundlers (babel e webpack)
- No passado, cada aplicação que a gente trabalhava resolvia problemas comuns de formas diferentes
-->