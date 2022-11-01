---
layout: center
---

# Você pode usar um valor do JavaScript trocando `""` por `{}`

<br />

```jsx {all|2,3,8,9}
function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Observe a diferença entre `className="avatar"` e o `src={avatar}`
- `src={avatar}` lê um valor de uma variável no JavaScript chamada `avatar`
- JSX também é uma maneira especial de escrever JavaScript.
-->