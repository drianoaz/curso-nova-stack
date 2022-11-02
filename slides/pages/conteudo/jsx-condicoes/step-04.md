---
layout: section
---

# Operador lógico &&

<br />

```jsx {all} {maxHeight: '450px'}
function Item({ name, isDone }) {
  return <li className="item">{name} {isDone && ✅}</li>;
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Geralmente usamos você deseja renderizar algum JSX quando a condição é verdadeira ou não renderizar nada de outra forma.
- Uma expressão `&&` retorna o valor de seu lado direito se o lado esquerdo for true
- Se a condição for false, a expressão retornará false
- O React considera `false` ciomo sendo um "buraco" na árvore do JSX, assim como `null` e não renderiza nada no lugar
-->

---
layout: center
---

# Importante 🚨

- Não coloque números no lado esquerdo de `&&`
- Se o lado esquerdo for `0` a expressão obterá o valor `0`
- o React renderizará `0` em vez de nada 🤡
- um erro comum é escrever código como `messageCount && <p>New messages</p>`
- É fácil supor que não renderiza nada quando `messageCount` for `0`, mas essa expressão irá renderizar `0`
- Para corrigir, transforme o lado esquerdo em um booleano: `messageCount > 0 && <p>New messages</p>`


