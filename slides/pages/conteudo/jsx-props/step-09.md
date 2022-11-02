---
layout: center
---

# Definindo um valor padrão para uma prop

<br />

```jsx {all|4-10|11-16}
function Profile() {
  return (
    <div>
      <Avatar
        size={200}
        person={{ 
          name: 'Caetano', 
          imageId: 'X2lvzp5'
        }}
      />
      <Avatar
        person={{
          name: 'Elis', 
          imageId: 'Y5lgO8B'
        }}
      />
      ...
    </div>
  );
}
```

<style>
code {
  @apply text-sm !important;
}
</style>
