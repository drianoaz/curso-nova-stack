---
layout: center
---

# Assets

- Se o nosso site precisa de uma imagem ou ícone, não precisamos fazer upload manualmente como fazemos com a VTEX.
- O Next.js pode servir arquivos estáticos como imagens
- Tudo o que está na pasta `public` é servido de forma estática
- Devemos referenciar esses arquivos utilizando caminho absoluto, sempre começando com `/`
- O diretório `public` também é útil para robots.txt, Google Site Verification e quaisquer outras coisas estáticas. 

---
layout: center
---

# Exercício 18

---
layout: section
---

# Imagem não otimizada 🤒

```tsx
<img src="/images/profile.jpg" alt="Your Name" />
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Com HTML normal, você adicionaria sua foto de perfil da seguinte forma:
-->

---
layout: center
---

# Imagem não otimizada 🤒

Dessa forma você precisa lidar manualmente com:

- Garantir que sua imagem seja responsiva em diferentes tamanhos de tela
- Otimizando suas imagens com uma ferramenta ou biblioteca de terceiros
- Carregar imagens apenas quando ela estão visíveis

---
layout: center
---

# Componente de imagem do Next 👀

- O componente `next/image` extende a tag `<img>` padrão do HTML, adicionando recursos incríveis
- Otimização de imagem por padrão, servindo formatos modernos como WebP quando o browser for compatível
- É capaz de redimencionar as imagens
- A Otimização Automática de Imagem funciona mesmo com imagens que não estão na pasta `public`
- As imagens são carregadas em lazy-loading por padrão
- O Next.js otimiza as imagens sob demanda, conforme as requests dos usuários, não prejudicando o tempo de compilação
- As imagens são sempre renderizadas de forma a evitar o deslocamento cumulativo de layout (core web vital)

---
layout: section
---

## Componente de imagem do Next 👀

```tsx
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Your Name"
  />
);
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: center
---

# Metadata 🤖

- Você pode utilizar o componente `Head` para alterar os meta-dados de uma página
- Isso é útil para você alterar as informações de SEO de uma página

---
layout: section
---

```tsx
import Head from 'next/head';

...

<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```

<style>
code {
  @apply text-xl !important;
}
</style>

---

# Exercício 19