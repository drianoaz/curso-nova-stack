---
layout: center
---

# Renderizando dados de arrays

Digamos que você tenha uma lista de conteúdo.

```html
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: center
---

# Renderizando dados de arrays

- A única diferença entre esses itens de lista é seu conteúdo, seus dados
- Muitas vezes, você precisará mostrar várias vezes o mesmo componente usando dados diferentes
- Listas de produtos, listas de imagens, carrinho de compras são ótimos exemplos
- Nessas situações, podemos armazenar os dados em arrays
- Podemos utilizar métodos como `map` e `filter` para renderizar listas de componentes

---

```jsx
const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

function List() {
  const listItems = people.map(item => {
    return <li>{item}</li>;
  });

  return (
    <ul>{listItems}</ul>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Seria legal copiar esse código para o VSCode
- Mostrar isso sendo executado no browser
- Mostrar o erro de chaves
-->