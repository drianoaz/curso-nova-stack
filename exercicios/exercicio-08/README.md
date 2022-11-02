# Exiba os ícones corretos

Utilize o operador ternário `? :` para renderizar os ícones corretamente:
- ❌ para os itens não concluídos 
- ✅ para os itens concluídos

```jsx
function Item({ name, isDone }) {
  return <li className="item">{name}</li>;
}

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