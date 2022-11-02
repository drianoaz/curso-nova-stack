---
layout: center
---

# Por que o React precisa de chaves?

- Você precisa dar a cada item do array de componentes uma chave
- Pode ser uma string ou um número que o identifique exclusivamente entre outros itens daquele array
- Todos os elementos JSX diretamente dentro de um `map()` sempre precisam de uma `key`
- A `key` informa ao React a qual item do array cada componente corresponde
- Isso se torna especialmente importante se os itens do seu array puderem ser movidos, inseridos ou excluídos
- A `key` ajuda o React a entender o que exatamente aconteceu e a fazer as atualizações corretas na árvore DOM
- Sempre que for trabalhar com uma lista, exija que cada item tenha um identificador único (geralmente é trabalho do backend te dar isso)

---
layout: center
---

# Regras para `key`

- As keys devem ser exclusivas entre irmãos. 
- Não há problema em usar as mesmas chaves para nós JSX em arrays diferentes.
- As chaves não devem mudar ou isso anula seu propósito
- Não os gere durante a renderização.
- Não utilize informações que possam mudar de acordo com a ordem dos itens no array
- Você pode ficar tentado a usar o índice de um item no array como sua chave. 

---
layout: section
---

```jsx {all}  {maxHeight: '450px'}
function List() {
  const chemists = people.filter(item =>
    item.profession === 'chemist'
  );

  const listItems = chemists.map(item => {
    return (
      <li key={item.id}>
        <b>{item.name}</b>: {' ' + item.profession + ' '}
      </li>
    );
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