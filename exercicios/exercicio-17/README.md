# Sistema de roteamentos

- Crie uma nova aplicação Next.js, utilizando o comando `npx create-next-app@latest`
- A aplicação deve utilizar typescript e eslint
- Crie uma pasta chamada `posts` dentro da pasta `pages`
- Crie um arquivo chamado `first-post.tsx` dentro da pasta `posts` com o seguinte conteúdo:

```tsx
export default function FirstPost() {
  return <h1>First Post</h1>;
}
```

- Execute a aplicação em modo de desenvolvimento
- Acesse a URL http://localhost:3000/posts/first-post
- Verifique se a página está acessível

- Abra o arquivo `index.tsx` e faça o import do componente `Link`

```tsx
import Link from 'next/link';
```

- Procure e altere o código abaixo

```diff
<h1 className={styles.title}>
-  Welcome to <a href="https://nextjs.org">Next.js!</a>
+  Read <Link href="/posts/first-post">this page!</Link>
</h1>
```

- Edite o arquivo `pages/posts/first-post.js` e subtituia o conteúdo dele por esse:

```tsx
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
