---
layout: center
---

```jsx
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
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
- Aqui a URL "https://i.imgur.com/7vQD0fPs.jpg" e no atributo alt estão sendo passados ​​como strings de forma estática
- Mas e se você quiser especificar de forma dinâmica o texto src ou alt? 
-->