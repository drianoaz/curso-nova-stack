---
layout: center
---

# Você pode definir componentes React dentro uns dos outros como faria com elementos HTML normais.

---
layout: center
---

```jsx {all|2-8|10-17|18-19} {maxHeight:'450px'}
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
        {/* Outros componentes poderiam ser adicionados aqui */}
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
