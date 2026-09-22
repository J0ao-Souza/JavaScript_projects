🍳 Web de Receitas

Projeto de uma aplicação web para busca de receitas utilizando a API pública TheMealDB.

O usuário pode pesquisar pelo nome de uma receita e visualizar informações como nome do prato, região de origem, imagem, ingredientes e modo de preparo.

🚀 Funcionalidades
🔎 Busca de receitas pelo nome
⌨️ Pesquisa pressionando Enter
🖼️ Exibição da imagem da receita
🌎 Exibição da região de origem do prato
🥕 Lista de ingredientes e suas medidas
📖 Visualização do modo de preparo
❌ Botão para fechar o modo de preparo
⚠️ Mensagens para pesquisa vazia, receita não encontrada e erros na API
📱 Layout adaptado para telas menores
🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript
API TheMealDB
Google Fonts — Poppins
📂 Estrutura do projeto
Web-de-Receitas/
│
├── index.html
├── style.css
└── script.js
🧠 Como funciona

O projeto utiliza JavaScript para capturar o nome da receita digitado pelo usuário e realizar uma requisição para a API do TheMealDB.

A API retorna os dados da receita em formato JSON. O JavaScript então utiliza essas informações para criar dinamicamente o conteúdo exibido na página.

O fluxo principal funciona assim:

Usuário digita uma receita
        ↓
JavaScript captura o texto
        ↓
Requisição para a API TheMealDB
        ↓
API retorna os dados
        ↓
JavaScript processa os dados
        ↓
Receita é exibida na página
🌐 API utilizada

O projeto utiliza a API pública TheMealDB para obter as informações das receitas.

A busca é realizada através do endpoint:

https://www.themealdb.com/api/json/v1/1/search.php?s=
▶️ Como executar
1. Clone o repositório
git clone URL_DO_SEU_REPOSITORIO
2. Entre na pasta do projeto
cd Web-de-Receitas
3. Abra o arquivo index.html

Você pode abrir diretamente no navegador ou utilizar a extensão Live Server no VS Code.

4. Pesquise uma receita

Digite o nome de um prato no campo de pesquisa e clique em Buscar ou pressione Enter.

📚 O que aprendi neste projeto

Durante o desenvolvimento deste projeto, pratiquei:

Manipulação do DOM com JavaScript
getElementById()
querySelector()
Event Listeners
Eventos de click e keydown
Funções em JavaScript
Template Literals
Requisições utilizando fetch()
Tratamento de Promises com .then() e .catch()
Conversão de respostas para JSON
Manipulação de objetos
Estruturas de repetição for
Condicionais if e else
Criação dinâmica de HTML
Responsividade com CSS
Consumo de uma API externa
🎯 Objetivo

Este projeto foi desenvolvido como prática de HTML, CSS e JavaScript, principalmente para aprender a consumir uma API externa e utilizar os dados recebidos para criar uma interface dinâmica.

Projeto desenvolvido para fins de estudo e aprendizado.