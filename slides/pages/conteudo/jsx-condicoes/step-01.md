---
layout: center
---

# Exercício mental 🤔

- Digamos que você tenha uma lista de tarefas
- Dentro dessa lista, renderizamos vários componentes chamado `Item`
- O componente `Item` pode ser marcado como concluído ou não
- Queremos exibir um ícone de ✅ quando um item for marcado como concluído 

---

```jsx {all}  {maxHeight: '450px'}
function TaskList() {
  return (
    <section>
      <h1>Lista de tarefas</h1>
      <ul>
        <Item 
          isDone={false} 
          name="Entregar o B2C até 30/02/2023" 
        />
        <Item 
          isDone={true} 
          name="Chorar em posição fetal" 
        />
        <Item 
          isDone={true} 
          name="Rir de desespero" 
        />
      </ul>
    </section>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

# Renderização condicional

<br />

```jsx {all}  {maxHeight: '450px'}
function Item({ name, isDone }) {
  return <li className="item">{name}</li>;
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

# Renderização condicional

<br />

```jsx {all}  {maxHeight: '450px'}
function Item({ name, isDone }) {
  if (isDone) {
    return <li className="item">{name} ✅</li>;
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
- Se o isDone for true, esse código retornará uma árvore JSX diferente. 
- Observe como estou criando lógica com `if` e return. 
- No React, o fluxo de controle (como as condições) é tratado pelo JavaScript.
-->