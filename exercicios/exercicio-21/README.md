# Contador

- A partir do exercício 19, crie uma página chamada `contador.tsx`
- Essa página deverá exibir um parágrafo e um botão
- O parágrafo deverá exibir a quantidade de vezes que o botão foi clicado

---

# Altere a cor do texto

- crie uma página chamada `cores.tsx`
- Essa página deverá exibir um título qualquer e 3 botões
- Cada botão, quando clicado, deverá alterar a cor do título
- A cor inicial deverá ser preto

---

# Dê boas vindas

- crie uma página chamada `formulario.tsx`
- Essa página deverá exibir um formulário com um campo de texto e um botão
- Quando o formulário for enviado, você deverá exibir um parágrafo contendo o texto `Olá, {texto digitado}`
- Quando o texto for exibido, você deverá também exibir um botão chamado `Limpar` que quando clicado
deve remover o parágrafo da tela
- Não se esqueça de o comportamento padrão do formulário 

---

# Faça uma request HTTP

- Crie uma página chamada `data-fetch.tsx`
- Essa página deverá exibir um botão com o texto `buscar posts`
- Quando esse botão for clicado, você deverá fazer uma request HTTP GET para o endereço <https://jsonplaceholder.typicode.com/posts>
- Utilize o fetch nativo do browser para fazer essa request
- O resultado dessa request deverá ser exibida em uma lista 
- Cada item dessa lista deverá exibir um botão chamado `remover item` que quando clicado, deverá apagar esse item da lista (apenas em memória)
- Enquanto a request que busca os posts estiver pendente, você deverá exibir o texto `carregando...` na tela
- Caso a request falhe, você deve exibir a mensagem `Ops... Algo deu errado` na tela
