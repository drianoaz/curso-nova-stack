---
layout: center
---

# Exibindo dados através de props

- Cada componente pai pode passar algumas informações para seus componentes filhos
- Essas informações são chamadas de `props`
- As props são similares aos atributos do HTML
- Você pode passar qualquer valor por eles, incluindo strings, números, objetos, arrays e funções
- Podemos definir que props são as informações que você pode passar para uma tag JSX

---
src: pages/conteudo/jsx-props/step-01.md
---

---
layout: center
class: text-center
---

# Você pode criar as props que quiser para seus próprios componentes

---
src: pages/conteudo/jsx-props/step-02.md
---

---
layout: center
---

# O que vamos fazer agora? 👁️👄👁️

- Vamos imaginar que o front-end faz uma request para o backend
- nessa request o back retorna pra gente o nome da pessoa e o ID da imagem que precisa ser exibida
- O componente Avatar será criado de forma a saber exibir uma imagem a partir das informações que estamos passando
- Todas as imagens serão um quadrado perfeito
- O front-end conhece a URL base para exibir a imagem corretamente, então precisamos apenas do ID para exibir a imagem
- Precisamos fornecer a descrição correta da tag de imagem por conta dos recursos de acessibilidade


---
src: pages/conteudo/jsx-props/step-03.md
---

---
layout: center
---

# Lendo props em um componente

- Todo componente é uma função
- Você recebe as props como um objeto no primeiro parâmetro dessa função
- Esse objeto possui a mesma assinatura das props do local onde o componente está sendo utilizado
- Você pode ler as props fazendo uma desestruturação
- As props podem ser opcionais (só se você quiser)


---
src: pages/conteudo/jsx-props/step-04.md
---

---
src: pages/conteudo/jsx-props/step-05.md
---

---
src: pages/conteudo/jsx-props/step-06.md
---

---
layout: center
---

# Tudo junto

---
src: pages/conteudo/jsx-props/step-07.md
---

