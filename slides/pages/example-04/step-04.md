# utilizamos um componente da mesma forma que usamos as tags do HTML

<br />

```html {all|10}
<script type="text/jsx">
  const app = document.getElementById("app")

  function Header() {
    return (
      <h1>Hello World</h1>
    )
  }

  ReactDOM.render(<Header />, app)
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