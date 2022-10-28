# Um componente é uma função que retorna elementos da interface
<br />
```html {all|4-6}
<script type="text/jsx">
  const app = document.getElementById("app");

  function header() {
    // aqui vamos retornar elementos
  }

  ReactDOM.render(<h1>Hello World</h1>, app);
</script>
```

<style>
code {
  @apply text-xl !important;
}
</style>
