# Refatore o código abaixo para utilizar `if` ao invés de `? :`

O componente `Drink` utiliza uma série de ternários `? :` para exibir
informações diferentes baseado na prop `name`.

O problema é que as informações sobre cada bebida estão espalhadas por várias condições.

Refatore esse código para usar um único `if` em vez de três ternários `? :`.

```jsx
function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
      </dl>
    </section>
  );
}

function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
```