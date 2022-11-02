---
layout: section
---

# Operador ternário

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
- Existe outra maneira de escrever esse código
-->

---
layout: section
---


# Operador ternário

<br />

```jsx {all}  {maxHeight: '450px'}
function Item({ name, isDone }) {
  return (
    <li className="item">
      {isDone ? `${name} ✅` : name}
    </li>;
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


# Operador ternário

<br />

```jsx {all}  {maxHeight: '450px'}
function Item({ name, isDone }) {
  return (
    <li className="item">
      {isDone ? (
        <del>
          {name} ✅
        </del>
      ) : (
        name
      )}
    </li>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Agora, digamos que você queira envolver o texto do item concluído em outra tag HTML, como <del> riscá-lo. 
- Utilizar parênteses ajuda a entender um pouco melhor o código
- Esse estilo funciona bem para condições simples, mas use-o com moderação
- Seus componentes podem ficar confusos se existir muitas condições
-->