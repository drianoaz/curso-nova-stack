---
layout: center
---

# Tudo junto

<br />

```jsx
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Caetano', 
          imageId: 'X2lvzp5'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Elis', 
          imageId: 'VhTQi'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Belquior',
          imageId: 'Mc85TtX'
        }}
      />
    </div>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>
