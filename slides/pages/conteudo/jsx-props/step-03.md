---
layout: center
---

# Passando props para um componente

<br />

```jsx
function Profile() {
  return (
    <Avatar
      person={{ name: 'Caetano', imageId: 'X2lvzp5' }}
      size={100}
    />
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--



- Objeto dentro de um objeto mesmo
- Size é um número literal
-->