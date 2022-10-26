---
layout: full
---

```html {all|9-10|12-13|all}
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
      const app = document.getElementById('app');

      const header = document.createElement('h1');
      const headerContent = document.createTextNode('Hello World');

      header.appendChild(headerContent);
      app.appendChild(header);
    </script>
  </body>
</html>
```

<style>
code {
  @apply text-xl !important;
}
</style>
