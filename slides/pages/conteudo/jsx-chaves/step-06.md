---
layout: center
---

# Você pode usar um valor do JavaScript com `{}`

<br />

```jsx
function currentDate() {
  return new Date().toLocaleDateString();
}

function TodoList() {
  const name = 'Yallison';

  return (
    <h1>{name.toUpperCase()} - Lista de tarefas - {currentDate()}</h1>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>
