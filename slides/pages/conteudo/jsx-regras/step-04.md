# Feche todas as tags

<br />

```jsx {all|7|8-12}
// isso está quebrado
function Header() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Foo</h2>
      <br />
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        class="photo"
      />
    </>
  )
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- tags de fechamento automático como `<img>` devem se tornar `<img />`
- apesar disso funcionar no HTML, o JSX é mais exigente
-->