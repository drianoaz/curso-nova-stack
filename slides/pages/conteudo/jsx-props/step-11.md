---
layout: center
---

# Children

<br />

```jsx
function Card({ children }) {
  return (
    <div style={{
      padding: '10px',
      border: '1px solid #f00',
      borderRadius: '10px'
    }}>
      {children}
    </div>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Você pode pensar em um componente com um children como tendo um “buraco” que pode ser “preenchido” por seus componentes.
- Qualquer componente pode ser passado neste "buraco"
-->