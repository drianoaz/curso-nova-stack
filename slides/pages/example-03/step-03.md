---
layout: section
---

```html {all|8|10}
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/jsx">
      const app = document.getElementById('app');

      ReactDOM.render(<h1>Hello World</h1>, app);
    </script>
  </body>
</html>
```

<style>
code {
  @apply text-sm !important;
}
</style>

<!--
- Tem que lembrar de mudar o type text/jsx
-->