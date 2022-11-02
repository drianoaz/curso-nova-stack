---
layout: center
---

# Filtrando arrays de itens

---
layout: section
---

```jsx
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
```

<style>
code {
  @apply text-sm !important;
}
</style>

---
layout: center
---

# Exercício mental 🤔

- Digamos que você queira uma maneira de mostrar apenas as pessoas cuja profissão é 'chemist'. 
- Você pode usar o método `filter()` para retornar apenas essas pessoas
- Esse método pega um array de itens, os passa por um “teste” (uma função que retorna trueou false)
- O filter retorna um novo array apenas dos itens que passaram no teste (retornou true).

---
layout: section
---

```jsx
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

```jsx {all}  {maxHeight: '450px'}
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

function List() {
  const chemists = people.filter(item =>
    item.profession === 'chemist'
  );

  const listItems = chemists.map(item => {
    return (
      <li>
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