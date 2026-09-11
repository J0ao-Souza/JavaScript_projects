🎨 Pixel Art Generator

Um pequeno gerador de Pixel Art desenvolvido durante meus estudos de JavaScript.

O projeto permite criar uma grade de pixels dinamicamente e utilizar o mouse ou toque para pintar os quadrados, criando desenhos em Pixel Art diretamente no navegador.

📌 Sobre o projeto

Este projeto faz parte dos meus estudos práticos de JavaScript através de uma sequência de projetos.

Durante o desenvolvimento, pratiquei principalmente conceitos relacionados à manipulação do DOM, criação dinâmica de elementos HTML, eventos e interação com o usuário.

O projeto foi desenvolvido acompanhando um tutorial como parte do processo de aprendizagem. Além de reproduzir a aplicação, meu objetivo foi entender os conceitos utilizados e praticá-los por meio da implementação e da resolução de problemas encontrados durante o desenvolvimento.

🚀 Funcionalidades
Criação dinâmica da grade de Pixel Art
Definição da largura da grade
Definição da altura da grade
Pintura dos pixels através do mouse
Suporte à interação por toque
Alteração dinâmica das cores dos pixels
Atualização da grade através do JavaScript
Interface executada diretamente no navegador
🧠 O que eu pratiquei

Durante este projeto, tive contato com diversos conceitos importantes de JavaScript:

Variáveis com let e const
Funções
Arrow Functions
for e loops aninhados
forEach()
if e else
querySelector()
querySelectorAll()
getElementById()
createElement()
appendChild()
classList.add()
setAttribute()
addEventListener()
innerHTML
value
Manipulação de estilos através de JavaScript
Eventos de mouse
Eventos de toque
elementFromPoint()
try/catch
Template literals
⚙️ Como funciona
1. Seleção dos elementos

O JavaScript começa localizando os elementos importantes da página, como os campos responsáveis pela largura e altura da grade e o container onde os pixels serão criados.

Exemplo:

const container = document.querySelector(".container");

Isso permite que o JavaScript tenha acesso aos elementos HTML e possa modificá-los.

2. Criação da grade

A grade não precisa ser escrita manualmente no HTML.

O JavaScript cria os elementos utilizando:

document.createElement()

Depois, os elementos são adicionados à página com:

appendChild()

Loops for são utilizados para repetir esse processo e criar a quantidade de linhas e colunas escolhida pelo usuário.

3. Organização dos pixels

Cada elemento criado recebe uma classe CSS utilizando:

element.classList.add()

Isso permite que o CSS determine o tamanho, posição e aparência dos pixels.

4. Interação com o usuário

Eventos são utilizados para detectar ações do usuário.

Por exemplo:

element.addEventListener("click", () => {
    // ação
});

O JavaScript pode responder quando o usuário clica, movimenta o mouse ou utiliza uma tela sensível ao toque.

5. Pintura

Quando o usuário interage com determinado pixel, o JavaScript identifica o elemento correspondente e altera sua aparência.

A cor pode ser modificada através de:

element.style.backgroundColor

Assim, cada quadrado da grade pode funcionar como um pixel individual.

🛠️ Tecnologias utilizadas
HTML5

Utilizado para criar a estrutura da página e os elementos da interface.

CSS3

Utilizado para definir o visual da aplicação, incluindo:

Layout
Cores
Tamanhos
Espaçamentos
Estilização da grade
Interface dos controles
JavaScript

Responsável pela lógica e interatividade da aplicação.

O JavaScript controla a criação da grade, interação com os pixels, eventos do usuário e alterações dinâmicas da interface.

📂 Estrutura do projeto
01-pixel-art-generator/
│
├── index.html
├── style.css
└── script.js
▶️ Como executar

Como este é um projeto desenvolvido com HTML, CSS e JavaScript puro, não é necessário instalar dependências.

Baixe ou clone este repositório.
Entre na pasta 01-pixel-art-generator.
Abra o arquivo index.html em um navegador.

Também é possível utilizar uma extensão como o Live Server no VS Code para executar o projeto durante o desenvolvimento.

📚 Objetivo de aprendizagem

O principal objetivo deste projeto não foi apenas construir um Pixel Art Generator, mas utilizar a aplicação como uma forma prática de aprender JavaScript.

Durante os próximos projetos, pretendo continuar aplicando os conceitos aprendidos, experimentar alterações nos códigos e desenvolver projetos próprios para transformar o conhecimento adquirido em prática.

📈 Progresso

Este é o primeiro projeto da minha sequência de estudos práticos de JavaScript.

Projeto 01 — Pixel Art Generator