---
layout: center
---

# Componentes puros

---
layout: center
---

# O que é uma função pura?

Uma função pura é uma função com as seguintes características:

- Ela não altera nenhum objeto ou variável que existia antes de ser chamada.
- Dadas as mesmas entradas, uma função pura deve sempre retornar o mesmo resultado.

---
layout: section
---

# Exemplo de função pura

<br />

```jsx
function double(number) {
  return 2 * number;
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- double é uma função pura
- Se você passar 3, ele retornará 6. Sempre.
-->

---
layout: center
---

# O que isso tem haver com o React?

- O React foi projetado em torno deste conceito. 
- O React assume que cada componente que você escreve é ​​uma função pura
- Isso significa que os componentes React que você escreve devem sempre retornar o mesmo JSX com as mesmas entradas
- Escrever componentes como funções puras pode evitar bugs e compoartamentos imprevisíveis

---
layout: center
---

# O que acontece se eu não seguir isso?

---
layout: two-cols
class: flex items-center
---

```jsx
let guest = 0;

function Cup() {
  // Ruim: não altere uma variável preexistente!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  )
}
```

::right::

![](/example--side-effect.png)

<!-- 
- Isso só acontece se você executar no StrictMode*
- Sem o StrictMode esse bug não será visível
- Este componente está lendo e escrevendo uma variável `guest` declarada fora dele.
- Isso significa que chamar esse componente várias vezes ele produzirá JSX diferente
- Se outros componentes lerem guest, eles também produzirão JSX diferente
- Isso não é previsível
- Você pode corrigir este componente passando `guest` como prop
-->

---
layout: two-cols
class: flex items-center
---

```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

::right::

![](/example--without-side-effect.png)

---
layout: center
---

# Detectando componentes impuros com StrictMode

- No React existem três tipos de entradas que você pode ler durante a renderização: `props`, `state` e `context`
- Você deve sempre tratar essas coisas como sendo somente leitura
- Você não deve sobrescrever uma prop recebida em um componente
- Quando você deseja alterar algo em resposta à uma ação do usuário, deve definir um estado em vez alterar o valor de uma variável
- Você nunca deve alterar variáveis ​​ou objetos preexistentes enquanto seu componente estiver renderizando.

---
layout: center
---

# Detectando componentes impuros com StrictMode

- O React oferece um “Strict Mode” no qual ele chama a função de cada componente duas vezes durante o desenvolvimento.
- Ao chamar as funções do componente duas vezes, o Strict Mode ajuda a encontrar componentes que quebram essas regras.
- No exemplo anterior a função original era impura, então chamá-la duas vezes a quebrou.
- O Strict Mode não tem efeito na produção, portanto, não deixará o aplicação lento para seus usuários. 
- Para optar pelo Strict Mode, você pode usar `<React.StrictMode>` em volta do componente mais alto da aplicação
- Alguns frameworks fazem isso por padrão.

---
layout: center
---

# Mutação local

- No exemplo anterior, o problema era que o componente alterava uma variável preexistente durante a renderização.
- Isso geralmente é chamado de “mutação”
- Funções puras não alteram variáveis ​​fora do escopo da função ou objetos que foram criados antes da chamada - isso as torna impuras!
- Não há problema em alterar variáveis ​​e objetos que você acabou de criar durante a renderização. 

---

# Mutação local

<br />

```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function List() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- Se a variável cups função List isso seria um grande problema
- Você estaria alterando um objeto preexistente
- Como a gente criou aquele array durante a mesma renderização, todo código fora da função List jamais saberá que isso aconteceu
- Isso é chamado de mutação local
-->

---
layout: center
---

# Onde você pode causar efeitos colaterais?

- Em algumas situações precisamos atualizar a tela, fazer alguma animação, alterar os dados
- Essas alterações são chamadas de efeitos colaterais
- No React os efeitos colaterais geralmente pertencem a manipuladores de eventos.
- Manipuladores de eventos são funções que o React executa quando você executa alguma ação — por exemplo, quando você clica em um botão. 
- Mesmo que os manipuladores de eventos sejam definidos dentro do seu componente, eles não são executados durante a renderização
- Então, os manipuladores de eventos não precisam ser puros.
- Você também pode causar efeitos colaterais dentro do hook `useEffect` - Essa abordagem só deve ser seu último recurso

---
layout: center
---
# Exercícios

- Exercício 14
- Exercício 15
- Exercício 16
