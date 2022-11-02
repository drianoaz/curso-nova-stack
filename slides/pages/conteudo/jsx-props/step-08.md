---
layout: center
---

# Definindo um valor padrão para uma prop

<br />

```jsx
function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
      style={{
        borderRadius: '50%'
      }}
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
- O valor padrão só é usado se a prop `size` estiver faltando ou se você passar `size={undefined}`
- Se você passar `size={null}` ou `size={0}` o valor padrão não será usado
-->