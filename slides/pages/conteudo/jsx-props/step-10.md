---
layout: center
---

# Spread

<br />

```jsx
function Profile() {
  const foo = {
    size: 200,
    person: { 
      name: 'Caetano', 
      imageId: 'X2lvzp5'
    }
  }

  return (
    <div>
      <Avatar {...foo} />
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
- Use essa sintaxe de propagação com cuidado
- Se você estiver usando em todos os outros componentes, algo está errado. 
-->