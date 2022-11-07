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
layout: center
---

# Respondendo a eventos

- O React permite adicionar manipuladores de eventos no JSX
- Os manipuladores de eventos são suas próprias funções que serão executadas em resposta às interações do usuário como clicar, passar o mouse, focar em inputs
- Os elementos padrões como `<button>` apenas suportam eventos de navegador nativos como `onClick`
- Para seus próprios componentes você pode criar os manipuladores de eventos que quiser

---
layout: center
---

# Adicionando manipuladores de eventos 💥

- Defina a função que será executada
- Passe essa função como prop para a tag JSX apropriada

---
layout: section
---

## Adicionando manipuladores de eventos 💥

<br />

```jsx
// pages/eventos.tsx
export default function Eventos() {
    return (
        <button>Eu ainda não faço nada</button>
    );
};
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

## Adicionando manipuladores de eventos 💥

<br />

```jsx
// pages/eventos.tsx
export default function Eventos() {
    function handleClick() {
        alert('oi')
    }

    return (
        <button onClick={handleClick}>Clique aqui</button>
    );
};
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

## Adicionando manipuladores de eventos 💥

<br />

```jsx
// pages/eventos.tsx
export default function Eventos() {
    const handleClick = () => {
        alert('oi')
    }

    return (
        <button onClick={handleClick}>Clique aqui</button>
    );
};
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

## Adicionando manipuladores de eventos 💥

<br />

```jsx
// pages/eventos.tsx
export default function Eventos() {
    return (
        <button onClick={function handleClick() {
            alert('oi');
        }}>Clique aqui</button>
    );
};
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

## Adicionando manipuladores de eventos 💥

<br />

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
layout: center
---

# Funções do manipulador de eventos:

- Geralmente são definidos dentro de seus componentes
- Geralmente tem nomes que comecem com handle, seguidos pelo nome do evento

---
layout: center
---

# Funções passadas para manipuladores de eventos devem ser passadas, não chamadas:

- passando uma função (correto) `<button onClick={handleClick}>`
- chamando uma função (incorreto) `<button onClick={handleClick()}>`

<!-- 
- se você fizer isso a função vai ser invocada durante a renderização do componente
-->

---
layout: center
---

# Lendo props em manipuladores de eventos

- Como os manipuladores de eventos são declarados dentro de um componente, eles têm acesso às props do componente

---
layout: section
---


```jsx
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Eventos() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
};
```

<style>
code {
  @apply text-sm !important;
}
</style>

---
layout: center
---

# Passando manipuladores de eventos como prop

- Para seus próprios componentes você pode criar suas prórias props
- Por convenção, sua prop que manipula eventos devem começar com `on`, seguido por uma letra maiúscula

---
layout: section
---


```jsx
function AlertButton({ onClose, children }) {
  return (
    <div>
      {children}
      <button onClick={onClose}>fechar</button>
    </div>
  );
}

export default function Eventos() {
  return (
    <div>
      <AlertButton onClose={() => alert("play message closed")}>
        Play Movie
      </AlertButton>
      <AlertButton onClose={() => alert("upload message closed")}>
        Upload Image
      </AlertButton>
    </div>
  );
}
```

<style>
code {
  @apply text-sm !important;
}
</style>

---
layout: center
---

# Propagação de eventos

- Os manipuladores de eventos capturarão os eventos que qualquer filho que seu componente possa ter
- Os eventos padrões se propagam: começa onde o evento aconteceu e depois sobe na árvore
- Todos os eventos padrões, exceto onScroll, se propagam no React

---
layout: section
---


```jsx
function AlertButton({ onClose, children }) {
  return (
    <div>
      {children}
      <button onClick={onClose}>fechar</button>
    </div>
  );
}

export default function Eventos() {
  return (
    <div onClick={() => alert('click into div')}>
      <AlertButton onClose={() => alert("play message closed")}>
        Play Movie
      </AlertButton>
      <AlertButton onClose={() => alert("upload message closed")}>
        Upload Image
      </AlertButton>
    </div>
  );
}
```

---
layout: center
---

# Parando a propagação

- Os manipuladores de eventos padrões recebem um objeto de evento como seu único argumento
- Por convenção, geralmente é chamado de `e`, que significa “evento”
- Você pode usar este objeto para ler informações sobre o evento
- Se você quiser impedir que um evento alcance os componentes pai, você precisa chamar `e.stopPropagation()`

---

```jsx
function AlertButton({ onClose, children }) {
  return (
    <div>
      {children}
      <button onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}>fechar</button>
    </div>
  );
}

export default function Eventos() {
  return (
    <div onClick={() => alert('click into div')}>
      <AlertButton onClose={() => alert("play message closed")}>
        Play Movie
      </AlertButton>
      <AlertButton onClose={() => alert("upload message closed")}>
        Upload Image
      </AlertButton>
    </div>
  );
}
```

---
layout: center
---

## Mergulho profundo

- Em casos raros, pode ser necessário capturar todos os eventos em elementos filhos, 
mesmo que eles tenham parado a propagação
- Por exemplo, talvez você queira registrar cada clique no GA, independentemente da lógica de propagação
- Você pode fazer isso adicionando `Capture` no final do nome do evento
- Você provavelmente não os usará isso nunca, mas é legal saber que existe

---

```jsx
function AlertButton({ onClose, children }) {
  return (
    <div>
      {children}
      <button onClick={(e) => {
        e.stopPropagation()
        onClose()
      }}>fechar</button>
    </div>
  );
}

export default function Eventos() {
  return (
    <div onClickCapture={() => alert('click into div')}>
      <AlertButton onClose={() => alert("play message closed")}>
        Play Movie
      </AlertButton>
      <AlertButton onClose={() => alert("upload message closed")}>
        Upload Image
      </AlertButton>
    </div>
  );
}
```

---

## Passando informações para seus eventos

- Em algumas situações pode ser útil você ter acesso a informações que foram obtidas durante a execução do seu evento
- Você pode passar como parâmetro, por exemplo, o evento original ou qualquer informação que quiser

---

```jsx
function AlertButton({ onClose, children }) {
  return (
    <div>
      {children}
      <button onClick={() => onClose(children)}>fechar</button>
    </div>
  );
}

export default function Eventos() {
  const handleClose = (children) => {
    alert(`${children} closed`);
  }

  return (
    <div>
      <AlertButton onClose={handleClose}>
        Play Movie
      </AlertButton>
      <AlertButton onClose={handleClose}>
        Upload Image
      </AlertButton>
    </div>
  );
}
```

---
layout: center
---

# Prevenindo o comportamento padrão

- Alguns eventos do navegador têm um comportamento padrão associado a eles
- Por exemplo, quando um botão dentro de um formulário é clicado ele recarregará a página inteira por padrão
- Podemos utilizar o `e.preventDefault()` para fazer isso

---
layout: section
---

## Isso não funciona do jeito que esperamos 🤡

<br />

```jsx
// pages/signup.tsx
export default function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button>Send</button>
    </form>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

---

## Agora funciona 😎

<br />

```jsx
// pages/signup.tsx
export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
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

# Os manipuladores de eventos podem ter efeitos colaterais?

- Manipuladores de eventos são o melhor lugar para efeitos colaterais.
- Os manipuladores de eventos não precisam ser puros
- No entanto, para alterar algumas informações, primeiro você precisa de alguma maneira de armazená-las
- No React, isso é feito usando state, a memória de um componente
