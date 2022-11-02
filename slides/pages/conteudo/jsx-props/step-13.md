---
layout: center
---

# Tudo junto

---

```jsx {1-14|16-26|28-40} {maxHeight: '450px'}
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

function Profile() {
  return (
    <Card>
      <Avatar
        size={200}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>
