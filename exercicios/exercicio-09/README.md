# Mostra a importância utilizando `&&`

Neste exercício, cada `Item` recebe uma prop numérica chamada `importance`.

Use o operador `&&` para renderizar _(Importância: X)_ em itálico, mas apenas
para itens que tenham importância maior do que zero.

Sua lista de itens deve ficar assim:

- Entregar o B2C até 30/02/2023 _(Importância: 10)_
- Chorar em posição fetal
- Rir de desespero _(Importância: 6)_

```jsx
function Item({ name, importance }) {
  return <li className="item">{name}</li>;
}

function TaskList() {
  return (
    <section>
      <h1>Lista de tarefas</h1>
      <ul>
        <Item 
          importance={10} 
          name="Entregar o B2C até 30/02/2023" 
        />
        <Item 
          importance={0} 
          name="Chorar em posição fetal" 
        />
        <Item 
          importance={6} 
          name="Rir de desespero" 
        />
      </ul>
    </section>
  );
}
```