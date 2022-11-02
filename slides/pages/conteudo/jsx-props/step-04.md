---
layout: center
---

# Lendo props em um componente

<br />

```jsx
function Avatar(props) {
  // person e size estão disponíveis aqui dentro
  console.log(props)
  // { 
  //    person: { name: 'Caetano', imageId: 'X2lvzp5' }
  //    size: 100
  // }
}
```

<style>
code {
  @apply text-xl !important;
}
</style>
