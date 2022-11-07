---
layout: center
---

# Sistema de roteamentos baseado em arquivos

- As páginas são associadas a uma rota com base em seu nome de arquivo
- As páginas são componentes React
- O componente pode ter qualquer nome, mas você deve exportá-lo como `default`.
- `pages/index.js` está associado à rota `/`
- `pages/posts/first-post.js` está associado à `/posts/first-post` rota
- De certa forma, isso é semelhante à construção de sites usando arquivos HTML ou PHP só que usando componentes React

---
layout: center
---

<img src="/example--nextjs-page.png" style="height:500px;">

---
layout: center
---

<img src="/example--nextjs-new-pages-01.png" style="height:500px;">

---
layout: center
---

<img src="/example--nextjs-new-pages-02.png" style="height:500px;">

---
layout: center
---

# Componente Link

- Ao fazer sites usando apenas HTML, você usa a tag `<a>` HTML para navegar entre páginas
- No Next.js, você pode usar o componente `Link`
- O componente `<Link>` permite que você faça a navegação do lado do cliente e aceita props que lhe dão melhor controle sobre o comportamento da navegação
- O uso é similar ao do HTML

---
layout: section
---

# Usando o componente Link

```jsx
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: center
---

# Navegação do lado do cliente

- O componente `Link` permite a navegação do lado do cliente entre duas páginas da mesma aplicação
- A navegação do lado do cliente significa que a transição da página acontece usando JavaScript
- é mais rápido que a navegação padrão feita pelo navegador
- Não recarrega completamente a página ao trocar de URL
- Sempre que os componentes aparecem ficam visíveis do navegador, o Next.js pré-busca automaticamente o código da página vinculada em segundo plano
- Quando você clicar no link, o código da página de destino já estará carregado em segundo plano e a transição da página será quase instantânea! ⚡️🚀🤘

---
layout: center
---

<img src="/example--client-side-routing.gif" style="height:500px;">




