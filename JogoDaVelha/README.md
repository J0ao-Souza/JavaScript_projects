🎮 Jogo da Velha de MEMES

Um projeto de Jogo da Velha desenvolvido com HTML, CSS e JavaScript, utilizando GIFs de personagens como peças dos jogadores.

O projeto foi desenvolvido como forma de praticar conceitos de JavaScript, manipulação do DOM, eventos, lógica de programação e atualização de elementos HTML.

🚀 Funcionalidades
🎮 Jogo da Velha para dois jogadores
🖼️ GIFs personalizados para representar os jogadores
🏆 Identificação automática do vencedor
🤝 Detecção de empate
🔄 Botão para reiniciar a partida
📊 Contador de vitórias dos jogadores
🎨 Tabuleiro centralizado e ampliado
📱 Layout adaptado ao tamanho da tela
🛠️ Tecnologias utilizadas
HTML5
CSS3
JavaScript
📂 Estrutura do projeto
JogoDaVelha/
│
├── index.html
├── style.css
├── index.js
└── README.md
🧠 Conceitos praticados

Durante o desenvolvimento foram utilizados diversos conceitos de JavaScript:

function
if e else
for
Variáveis
Operadores lógicos
getElementById()
getElementsByTagName()
innerHTML
dataset
Eventos de clique
Manipulação do DOM
Controle de estado do jogo
Contagem de jogadas
Verificação de condições de vitória
🎯 Como funciona

O jogo possui nove casas. Cada jogador realiza uma jogada clicando em uma casa vazia.

O primeiro jogador utiliza um GIF e o segundo jogador utiliza outro GIF.

Internamente, o JavaScript continua identificando os jogadores como:

x
o

O GIF é utilizado apenas para representar visualmente cada jogador.

Após cada jogada, o programa verifica todas as possibilidades de vitória:

1 2 3
4 5 6
7 8 9

São verificadas as linhas, colunas e diagonais.

Quando um jogador vence, seu placar é aumentado.

O placar permanece mesmo quando uma nova partida é iniciada.

🏆 Sistema de pontuação

O projeto possui um contador separado para cada jogador:

Jogador 1: 0
Jogador 2: 0

Quando um jogador vence, sua pontuação aumenta em 1.

O placar não é zerado ao reiniciar uma partida, permitindo acompanhar várias partidas consecutivas.

▶️ Como executar
Baixe ou clone este repositório.
Abra a pasta JogoDaVelha.
Abra o arquivo index.html no navegador.
Clique nas casas para começar a jogar.

Também é possível abrir o projeto utilizando o Live Server no Visual Studio Code.

📚 Objetivo

O objetivo deste projeto foi praticar JavaScript através da criação de um jogo funcional, trabalhando principalmente com:

Manipulação do DOM
Eventos
Funções
Condições
Repetições
Variáveis
Atributos personalizados
Atualização dinâmica da página
Lógica de programação