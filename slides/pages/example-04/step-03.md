# os componentes devem obrigatoriamente começar com letra maiúscula

<br />

```html {all|4-8|11}
<script type="text/jsx">
  const app = document.getElementById("app")

  function Header() {
    return (
      <h1>Hello World</h1>
    )
  }

  // isso não vai funcionar ainda
  ReactDOM.render(Header, app)
</script>
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!-- 
- para diferenciar do HTML e JavaScript simples.
-->