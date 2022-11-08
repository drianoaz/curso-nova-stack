---
layout: center
---

# Estado: a memória de um componente 🧠

---
layout: center
---

# Quando uma variável regular não é suficiente

- Aqui está um componente que renderiza campo de texto e um nome. 
- Ao digitar dentro do campo, devemos atualizar o nome na interface
- Não parece haver nada de errado no código, no entanto, o código não funcionará

---
layout: section
---

```jsx
export default function ExampleState() {
  let name = "Kimi";

  const onChange = (event) => {
    name = event.target.value;
    console.log(name);
  }

  return (
    <div>
      <input onChange={onChange} />
      <h1>{name}</h1>
    </div>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!-- 
- Variáveis ​​locais não persistem entre renderizações
- Alterações em variáveis ​​locais não acionarão renderizações
-->

---
layout: center
---

# Adicionando estado

O hook `useState` fornece duas coisas:

- Uma variável de estado para reter os dados entre as renderizações
- Uma função para atualizar o estado e avisar React para renderizar o componente novamente

<br />

```jsx
import { useState } from 'react';

...

const [name, setName] = useState('Kimi')
```

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

```jsx
import { useState } from 'react'

export default function ExampleState() {
  const [name, setName] = useState('Kimi');

  const onChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <input onChange={onChange} />
      <h1>{name}</h1>
    </div>
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

# Hooks do React 🪝

- No React, `useState` ou qualquer outra função que comece com `use`, é chamado de Hook
- Hooks são funções especiais que só estão disponíveis enquanto o React está renderizando 
- Eles permitem que você “se conecte” a diferentes recursos do React
- State é apenas um desses recursos, mas você conhecerá os outros Hooks logo mais

---
layout: center
---

# Regras dos Hooks 🪝🤓

- Hooks só podem ser chamadas dentro de componentes ou seus próprios hooks
- Você não pode chamar Hooks dentro de condições, loops ou outras funções aninhadas.

---
layout: center
---

# Anatomia do useState

- Quando você chama `useState`, você está dizendo ao React que deseja que este componente se lembre de algo

<br />
```jsx
const [name, setName] = useState('Kimi');
```

- A convenção é nomear esse par como `const [something, setSomething]`
- Você pode nomeá-lo como quiser, mas as convenções tornam as coisas mais fáceis de entender em todos os projetos
- O único argumento para `useState` é o valor inicial de sua do estado
- Um componente pode ter mais de um `useState` declarado dentro dele

<style>
code {
  @apply text-xl !important;
}
</style>

---
layout: section
---

```jsx {all}  {maxHeight: '450px'}
import { useState } from 'react'

export default function ExampleState() {
  const [name, setName] = useState('Kimi');
  const [showName, setShowName] = useState(true);

  const onChange = (event) => {
    setName(event.target.value);
  }

  const onClick = () => {
    setShowName(!showName)
  }

  return (
    <div>
      <input onChange={onChange} />
      {showName && <h1>{name}</h1>}
      <button onClick={onClick}>
        {showName ? 'Hide' : 'Show'} Name
      </button>
    </div>
  );
}
```

<style>
code {
  @apply text-xl !important;
}
</style>

<!--
- É uma boa ideia ter várias variáveis ​​de estado se seu estado não estiver relacionado, como name e showName
- Mas se você achar que frequentemente altera duas variáveis ​​de estado juntas, pode ser melhor combiná-las em uma única
- Por exemplo, se você tem um formulário com muitos campos, é mais conveniente ter uma única variável de estado que contém um objeto do que uma variável de estado por campo 
-->

---
layout: center
---

# Estado isolado e privado

- O estado é local para uma cada instância do componente na tela
- Se você renderizar o mesmo componente duas vezes, cada cópia terá um estado completamente isolado! 
- A alteração de um deles não afetará o outro

---
layout: section
---

```jsx {all}  {maxHeight: '450px'}
import { useState } from 'react'

function MyComponent() {
  const [name, setName] = useState('Kimi');
  const [showName, setShowName] = useState(true);

  const onChange = (event) => {
    setName(event.target.value);
  }

  const onClick = () => {
    setShowName(!showName)
  }

  return (
    <div>
      <input onChange={onChange} />
      {showName && <h1>{name}</h1>}
      <button onClick={onClick}>{showName ? 'Hide' : 'Show'} Name</button>
    </div>
  );
}

export default function ExampleState() {
  return (
    <>
      <MyComponent />
      <hr />
      <MyComponent />
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
- Observe também como o ExampleState componente não “sabe” nada sobre os estados do componente MyComponent
- Ao contrário de props, state é totalmente privado para o componente que o declara. 
-->

---
layout: center
---

# Exercício 21
# Exercício 22
# Exercício 23