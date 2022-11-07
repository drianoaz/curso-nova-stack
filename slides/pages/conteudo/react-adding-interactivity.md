---
layout: center
---

# Adicionando interatividade

- Algumas coisas na tela podem ser atualizadas em resposta ao que o usuário faz
- Por exemplo, clicar em uma galeria de imagens alterna a imagem ativa
- No React, os dados que mudam ao longo do tempo são chamados de estado. 
- Vamos aprender a escrever componentes que tratam de interações, atualizam seu estado e exibem saídas diferentes ao longo do tempo

<!--
- Temos que voltar a aprender conceitos do react
-->

---

# Respondendo a eventos

- O React permite adicionar manipuladores de eventos no JSX
- Os manipuladores de eventos são suas próprias funções que serão executadas em resposta às interações do usuário como clicar, passar o mouse, focar em inputs
- Os elementos padrões como `<button>` apenas suportam eventos de navegador nativos como `onClick`
- Para seus próprios componentes você criar os manipuladores de eventos que quiser

---
layout: section
---

```jsx
// pages/eventos.tsx
export default function Eventos() {
    return (
        <button onClick={() => alert('oi')}>Clique aqui</button>
    );
};
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
