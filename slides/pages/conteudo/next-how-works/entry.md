---
layout: center
---

# Como o Next.js funciona? 🧐

<!--
- Antes de conhecer os recursos mais avançados do Next.js, seria útil entender os conceitos básicos de como o Next.js funciona.
-->

---
layout: center
---

# Ambiente de Desenvolvimento

- Durante o desenvolvimento, você está construindo e executando a aplicação na máquina local
- Nesse estágio, o Next.js é otimizado para quem desenvolve e sua experiência na criação da aplicação
- Ele vem com recursos que visam melhorar a experiência de quem desenvolve
- Tem recursos como a integração TypeScript e  ESLint,  Fast Refresh e muito mais.

---
layout: center
---

# Ambiente de produção

- Ir para a produção é o processo de deixar a aplicação pronta para ser deployada e consumida pelos usuários
- Nesse estágio, o Next.js é otimizado para os usuários finais e sua experiência usando o aplicativo. 
- O objetivo é transformar o código para torná-lo acessível de forma eficiente
- O código precisa ser compilado, empacotado, minificado e dividido
- O Next.js lida com muitas dessas transformações de código e infraestrutura relacionada para facilitar a nossa vida
- O Next.js tem um compilador escrito em Rust e por padrão ele utiliza esse compilador para fazer essas coisas

---
layout: center
---

# O que é compilar?

- Compilar é processo de pegar o código em uma linguagem e transformar ele em outra linguagem ou em outra versão dessa linguagem
- Quando desenvolvemos escrevemos código em linguagens mais amigáveis para quem desenvolve, como JSX, TypeScript e versões modernas do JavaScript
- Esse código que escrevemos precisa ser compilado para apenas JavaScript antes que os navegadores possam entender ele
- No Next.js, a compilação acontece durante o estágio de desenvolvimento, toda vez que você edita seu código
- E também ocorre na etapa de build para preparar o código aplicação para produção

---

# O que é compilar?

![](/example--compiling.png)


---
layout: center
---

# O que é Minificação?

- Quem desenvolve escreve código otimizado para legibilidade humana.
- Esse código pode conter informações extras que não são necessárias para a execução do código, como comentários, espaços, tabs e quebras de linhas.
- Minificação é o processo de remoção da formatação do código e comentários desnecessários sem alterar a funcionalidade do código
- O objetivo é melhorar o desempenho da aplicação diminuindo os tamanhos dos arquivos
- No Next.js, os arquivos JavaScript e CSS são minificados automaticamente para produção

---
layout: center
---

# O que é Minificação?

![](/example--minifying.png)

---
layout: center
---

# O que é Bundling? (empacotamento)

- As aplicações podem ser divididas em diversos módulos, componentes e funções 
- Conseguimos utilizar pacotes externos de terceiros
- Podemos utilizar esses pequenos pedaços ​​para construir partes maiores nas nossas aplicações
- Fazemos isso exportando e importando
- Com isso criamos dependências entre os arquivos
- Empacotamento é o processo de resolver essas dependências e mesclar os arquivos em pacotes otimizados 
- Fazemos isso para reduzir o número de requests para diferentes arquivos quando um usuário visita uma página na web

---
layout: center
---

# O que é Bundling? (empacotamento)

![](/example--bundling.png)


---
layout: center
---

# O que é Code Spliting?

- Geralmente dividimos nossas aplicações em várias páginas que podem ser acessadas de diferentes URLs. Cada uma dessas páginas é um ponto de entrada
- Code spliting é o processo de dividir o bundle da aplicação em partes menores exigidas por cada ponto de entrada, o objetivo é melhorar o tempo de carregamento inicial do aplicação carregando apenas o código necessário para executar essa página
- O Next.js tem suporte integrado para code spliting. Cada arquivo dentro de seu diretório `pages/` será automaticamente dividido em seu próprio bundle durante a etapa de build
- Qualquer código compartilhado entre as páginas também é dividido em outro pacote para evitar baixar novamente o mesmo código em navegação posterior
- Após o carregamento inicial da página, o Next.js pode pré-carregar o código de outras páginas para as quais os usuários provavelmente navegarão
- Também tem suporte importações dinâmicas - outra maneira de dividir manualmente qual código é carregado inicialmente

---
layout: center
---

# O que é Code Spliting?

![](/example--code-splitting.png)

---
layout: center
---

# Build time

- é o nome dado a uma série de etapas que preparam o código para produção
- Quando você cria seu aplicativo, o Next.js transforma seu código em arquivos otimizados para produção prontos para serem implantados em servidores e consumidos pelos usuários

Esses arquivos incluem:

- Arquivos HTML para páginas geradas estaticamente
- Código JavaScript para renderizar páginas no servidor
- Código JavaScript para tornar as páginas interativas no cliente
- Arquivos CSS

---
layout: center
---

# Runtime

- é período de tempo em que a aplicação é executada em resposta à solicitação de um usuário, depois que já foi criada e deployada

---
layout: center
---

# Client vs Server

- Client: navegador no dispositivo do usuário
- Server: computador em um data center que armazena o código da nossa aplicação

---
layout: center
---

# Renderização

- Em algum momento o código React terá que ser executado e convertido na interface do usuário
- Esse processo é chamado de renderização
- A renderização pode ocorrer no server ou no client
- Isso pode acontecer antecipadamente em build time ou em todas as solicitações em runtime 

---
layout: center
---

# Renderização

Com o Next.js, três tipos de métodos de renderização estão disponíveis: 
- Server-Side Rendering
- Static Site Generation
- Client-Side Rendering

---
layout: center
---

# Client-Side Rendering

- Em uma aplicação React padrão, o navegador recebe um HTML vazio do servidor junto com o código JavaScript para construir a interface do usuário
- Isso é chamado de renderização do lado do cliente porque o trabalho de renderização inicial acontece no dispositivo do usuário
- Na prática, isso significa que, para um aplicativo totalmente renderizado no lado do cliente, o usuário verá uma página em branco enquanto o trabalho de renderização está sendo feito
- Os bots dos mecanismos de busca não gostam disso 🥺

---

# Client-Side Rendering

![](/example--client-side-rendering.png)

---

![](/example--csr.png)

---
layout: center
---

# Pre-Rendering

- Server-Side Rendering e Static Site Generation também são chamados de Pré-Renderização
- Com essa estratégia a busca de dados e a transformação de componentes React em HTML acontecem antes que o resultado seja enviado ao browser do usuário
- Pré-renderização significa que o HTML é gerado antecipadamente, em um servidor, em vez de ter tudo feito por JavaScript no dispositivo do usuário
- ou seja, o HTML já vem "pronto"
- Os bots dos mecanismos de busca gostam disso 🚀
- O Next.js pré-renderiza cada página por padrão. 

---
layout: center
---

# Pre-Rendering

![](/example--pre-rendering.png)

---
layout: center
---

# Server-Side Rendering

- O HTML da página é gerado em um servidor para cada request
- A página já vem "pronta" para o browser do usuário
- O HTML gerado, os dados em JSON e o JavaScript para tornar a página interativa são enviados ao client
- No cliente, o HTML é usado para mostrar uma página não interativa
- Enquanto o React usa os dados JSON e JavaScript para tornar os componentes interativos
- Este processo é chamado de hydration
- No Next.js, você pode optar por renderizar páginas do lado do servidor usando `getServerSideProps`

---

![](/example--ssr.png)

---
layout: center
---

# Static Site Generation

- O HTML é gerado no servidor
- O conteúdo é gerado uma vez, no momento da compilação
- Quando o aplicativo é deployado, e o HTML é armazenado em um CDN e reutilizado para cada request
- No Next.js, você pode optar por gerar páginas estaticamente usando `getStaticProps`
- Os bots dos mecanismos de busca amam disso 🥰😍

---
layout: center
---

# Infraestrutura 🤡

---
layout: center
---

# Servidor de origem

- O servidor se refere ao computador principal que armazena e executa a versão original do código da aplicação
- Quando um servidor de origem recebe uma solicitação, ele faz alguns processamentos antes de enviar uma resposta
- O resultado deste trabalho computacional pode ser movido para uma CDN (Content Delivery Network)

---
layout: center
---

# CDN

- As vezes chamamos isso de cache de borda
- CDNs armazenam conteúdo estático (como HTML e arquivos de imagem) em vários locais ao redor do mundo
- São colocados entre o cliente e o servidor de origem
- Quando uma nova request chega, o local CDN mais próximo do usuário pode responder com o resultado armazenado em cache
- Isso reduz a carga no servidor porque não precisamos gastar processamento a cada request
- Também é mais rápido para o usuário porque a resposta vem de um local geograficamente mais próximo a ele

---

![](/example--cdn.png)


