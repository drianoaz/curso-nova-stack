---
layout: center
---

```tsx {1-15|17-31} {maxHeight: '450px'}
// copiado do site b2b
const currencyFormatter = (number: number | null) => {
  if (number === null) {
    return '-';
  }

  if (number === 0) {
    return 'GRÁTIS';
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
};

function Foo() {
  const name = 'Yallison';

  return (
    <>
      <h1>{name}</h1>
      <h2>
        {currencyFormatter(null)} -
        {currencyFormatter(0)} -
        {currencyFormatter(1000)} -
        {currencyFormatter(1000 + 1000)}
      </h2>
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
- Apesar de você poder fazer qualquer coisa que o JavaScript faz dentro das `{}`, use o bom senço e lembre que alguém dará manutenção naquilo no futuro
-->