---
layout: section
---

# Regras para usar o JSX

---
src: ./pages/conteudo/jsx-regras/step-01.md
---

---
src: ./pages/conteudo/jsx-regras/step-02.md
---

---
src: ./pages/conteudo/jsx-regras/step-03.md
---

---
layout: center
---

# Por que apenas um elemento? <twemoji-thinking-face />

- JSX se parece com HTML, mas por baixo dos panos ele é transformado em objetos JavaScript
- Você não pode retornar dois objetos ao mesmo tempo em uma função sem definir eles dentro de um array
- Isso explica por que você também não pode retornar duas tags JSX sem envolvê-las em outra tag ou Fragment.

---
src: ./pages/conteudo/jsx-regras/step-04.md
---

---
src: ./pages/conteudo/jsx-regras/step-05.md
---

---
layout: center
---

# <twemoji-camel /> CamelCase para <s>quase</s> tudo!

- JSX se transforma em JavaScript depois da compilação
- Atributos escritos em JSX se tornam chaves de objetos depois da compilação
- É por isso que, no React, muitos atributos HTML são escritos em camelCase
- `class` é uma palavra reservada no JavaScript, é por isso que devemos usar `className` ao invés de `class`
- Por razões históricas os atributos `aria-*` e `data-*` são escritos utilizando `-` e não CamelCase

---
layout: image-right
image: giphy--cat-typing.gif
---

# Exercício

Corrija os erros existentes nesse arquivo

## exercicio-01

<!-- 
- caso não consigam acessar, enviar link correto
- https://gist.github.com/drianoaz/d77f426b3a46be2fcad8b467fa8982c0
-->
