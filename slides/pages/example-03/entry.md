---
src: ./pages/example-03/step-01.md
---

---
src: ./pages/example-03/step-02.md
---

---
layout: center
---
![](/giphy--explosion.gif)

---
layout: center
---

![](/error--babel-missing.png)

---
layout: center
---

# O que é JSX?

- JSX é uma extensão de sintaxe para JavaScript
- É parecido com HTML, com algumas poucas diferenças
- JSX e React são duas coisas separadas
- Os navegadores não entendem JSX por padrão
- Precisamos de um compilador que irá converter o código JSX em JavaScript normal


---
src: ./pages/example-03/step-03.md
---

---
layout: center
---

# React - Programação declarativa

```html
<script type="text/jsx">
  const app = document.getElementById("app");

  ReactDOM.render(<h1>Hello World</h1>, app);
</script>
```

<br />

# Nativo - Programação imperativa

```html
<script type="text/javascript">
  const app = document.getElementById('app');

  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Hello World');

  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

<!--
- usando o React, você pode reduzir muito código repetitivo
-->