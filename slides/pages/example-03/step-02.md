---
layout: section
---

```html {all|12}
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

    <script type="text/javascript">
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
- Vai explodir
-->