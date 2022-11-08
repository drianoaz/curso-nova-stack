---
layout: image-right
image: /giphy--chaves.gif
class: flex items-center
---

# JavaScript no JSX usando chaves

---
layout: center
---

# Como assim? 😱

- O JSX permite que você escreva algo parecido com HTML dentro de um arquivo JavaScript, mantendo a lógica de renderização e o conteúdo no mesmo lugar.
- Às vezes você vai querer adicionar um pouco de lógica JavaScript ou fazer referência a uma propriedade dinâmica dentro dos componentes.
- Você pode utilizar chaves para tornar as coisas dinâmicas

---
layout: center
---

![](/giphy--seu-madruga.gif)

---
layout: center
---

# Alguns exemplos

---
src: pages/conteudo/jsx-chaves/step-01.md
---

---
src: pages/conteudo/jsx-chaves/step-02.md
---

---
layout: center
---

![](/giphy--chapolin-feio.gif)

---
src: pages/conteudo/jsx-chaves/step-03.md
---

---
src: pages/conteudo/jsx-chaves/step-04.md
---

---
src: pages/conteudo/jsx-chaves/step-05.md
---

---
src: pages/conteudo/jsx-chaves/step-06.md
---

---
layout: center
---

# Você só pode usar chaves de duas maneiras dentro do JSX 🤓

- Como texto diretamente dentro de uma tag JSX: `<h1>{name} - Lista de tarefas<h1>`
- Como atributos imediatamente após o sinal `=`: `src={avatar}` irá ler a variável avatar

## Pontos de atenção

- `<{tag}>Yallison - Lista de tarefas</{tag}>` não funciona
- `src="{avatar}"` passará a string `"{avatar}"` como atributo e não uma variável

---
layout: center
---

![](/giphy--kiko.gif)

---
layout: center
---

# Usando dupla chaves: CSS e outros objetos em JSX 🤡

- Além de strings, números e outras expressões JavaScript, você utilizar objetos em JSX. 
- Os objetos também são indicados com chaves, como `{ name: "Hedy Lamarr", inventions: 5 }`
- para passar um objeto JS em JSX, você deve envolver o objeto em outro par de chaves: `person={{ name: "Hedy Lamarr", inventions: 5 }}`

---
src: pages/conteudo/jsx-chaves/step-07.md
---

---
layout: center
---

# Juntando tudo até aqui

---
src: pages/conteudo/jsx-chaves/step-08.md
---

---
layout: center
---

<img src="/example--sumitomo.png" style="height: 450px" />

---
layout: image-right
image: giphy--cat-typing.gif
---

# Exercícios



> ## exercicio-02
> 
> Corrija os erros existentes nesse arquivo

<br />

> ## exercicio-03
> 
> Deixe o conteúdo desse arquivo dinâmico

<br />

> ## exercicio-04
> 
> Faça a imagem ser exibida corretamente

<!-- 
- https://gist.github.com/drianoaz/78145700ae0e1391c48bab8839286243
- https://gist.github.com/drianoaz/baf66cf0d03ad3739a32dfe574a951f8
- https://gist.github.com/drianoaz/0b28c9df9bf8cf64674a6d9afe6e0432
-->