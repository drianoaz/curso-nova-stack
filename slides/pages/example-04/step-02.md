# Dentro dessa função você pode escrever JSX

<br />

```html {all|4-8|11}
<script type="text/jsx">
  const app = document.getElementById("app")

  function header() {
    return (
      <h1>Hello World</h1>
    )
  }

  // isso não vai funcionar ainda
  ReactDOM.render(header, app)
</script>
```

<style>
code {
  @apply text-xl !important;
}
</style>
