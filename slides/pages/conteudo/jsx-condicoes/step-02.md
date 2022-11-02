---
layout: center
---

# Exercício mental 🤔

- Em algumas situações você pode querer não renderizar nada
- Digamos que você tenha a mesma lista de tarefas
- Queremos agora não exibir os itens marcados como `isDone`
- Um componente sempre deve retornar algo
- Quando queremos não exibir renderizar nada, devemos retornar `null`

---
layout: section
---

# Não renderizar nada

<br />

```jsx {all}  {maxHeight: '450px'}
function Item({ name, isDone }) {
  if (isDone) {
    return null;
  }

  return <li className="item">{name}</li>;
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Fazer isso não é muito comum
- Mas em algumas situações isso é necessário
- Existem outras opções como evitar que o componente não seja renderizado no JSX do componente pai
-->