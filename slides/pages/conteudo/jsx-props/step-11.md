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
