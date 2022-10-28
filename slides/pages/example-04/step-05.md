# Você pode definir componentes React dentro uns dos outros como faria com elementos HTML normais.

<br />

```html {all|10}
<script type="text/jsx">
  const app = document.getElementById("app")

  function Header() {
    return (
      <h1>Hello World</h1>
    )
  }

  function HomePage() {
    return (
      <div>
        <Header />
      </div>
    );
  }

  ReactDOM.render(<HomePage />, app)
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