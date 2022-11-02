---
layout: center
---

```jsx
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/X2lvzp5.jpg"
      alt="Caetano"
      width={100}
      height={100}
      style={{
        borderRadius: '50%'
      }}
    />
  );
}

function Profile() {
  return (
    <Avatar />
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Por exemplo, `className`, `src`, `alt`, `width` e `height` são algumas das props que você pode passar para uma tag `<img>`
- As props que você pode passar para uma tag `<img>` são predefinidas pelo padrão do HTML
- Mas você pode passar quaisquer adereços para seus próprios componentes, como `<Avatar>`, para personalizá-los. 
-->
