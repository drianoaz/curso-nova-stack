---
layout: center
---

# Lendo props em um componente

<br />

```jsx
function Avatar({ person, size }) {
  // person e size estão disponíveis aqui dentro
  console.log(person, size)
  // { name: 'Caetano', imageId: 'X2lvzp5' }
  // 100
}
```

<style>
code {
  @apply text-xl !important;
}
</style>
