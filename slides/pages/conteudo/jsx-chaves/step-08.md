---
layout: center
---

```tsx {1|2-5|6-9|10-20|1-21|23-38} {maxHeight: '450px'}
const person = {
  user: {
    name: 'Sumitomo',
    avatar: 'https://avatars.githubusercontent.com/u/13684131?v=4'
  },
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  tasks: [
    {
      title: 'Entregar o B2C até 30/02/2023',
    },
    {
      title: 'Chorar em posição fetal',
    },
    {
      title: 'Rir de desespero'
    }
  ]
};

function TodoList() {
  return (
    <>
      <img
        className="avatar"
        src={person.user.avatar}
        alt={person.user.name}
      />
      <h1>{person.user.name.toUpperCase()} - Lista de tarefas</h1>
      <ul style={person.theme}>
        <li>{person.tasks[0].title}</li>
        <li>{person.tasks[1].title}</li>
        <li>{person.tasks[2].title}</li>
      </ul>
    </>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Falar que no próximo slide você vai conseguir ver o resultado
-->