---
layout: center
---

# Tudo junto

---
layout: center
---

```jsx {1-11|13-22|23-29|30-36} {maxHeight: '450px'}
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
        size={200}
        person={{ 
          name: 'Caetano', 
          imageId: 'X2lvzp5'
        }}
      />
      <Avatar
        size={150}
        person={{
          name: 'Elis', 
          imageId: 'Y5lgO8B'
        }}
      />
      <Avatar
        size={100}
        person={{ 
          name: 'Belchior',
          imageId: 'Mc85TtX'
        }}
      />
    </div>
  );
}
```

<style>
code {
  @apply text-lg !important;
}
</style>
