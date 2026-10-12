const nomeProduto=document.querySelector('#nome')
const valorProduto=document.querySelector('#valor')
const quantidadeProduto=document.querySelector('#quantidade')
const categoriaProduto=document.querySelector('#categoria')
const botaoCadastrar=document.querySelector('#btn-cadastrar')
const campoPesquisa=document.querySelector('#campo-pesquisa')
const botaoPesquisar=document.querySelector('#btn-pesquisar')
const totalProdutos=document.querySelector('#total')
const baixoEstoque=document.querySelector('#baixo-estoque')
const semEstoque=document.querySelector('#sem-estoque')
const areaProdutos=document.querySelector('.produtos')
const editarNome=document.querySelector('#editar-nome')
const editarValor=document.querySelector('#editar-valor')
const editarQuantidade=document.querySelector('#editar-quantidade')
const editarCategoria=document.querySelector('#editar-categoria')
const btnSalvar=document.querySelector('#btn-salvar')
const btnCancelar=document.querySelector('#btn-cancelar')
const modalEdicao = document.querySelector(".editar-produtos");
const mensagem = document.querySelector("#mensagem");

let idEmEdicao = null;


const produtos=[];
let proximoId=1;


const configuracoes = {
    nomeSistema: "Stock Control",
    limiteEstoqueBaixo: 5,
    categorias: [
        "Periféricos",
        "Eletrônicos",
        "Acessórios",
        "Outros"
    ]
};

const carregarCategorias = () => {
    const camposCategoria = [categoriaProduto, editarCategoria];

    camposCategoria.forEach(campo => {
        campo.innerHTML = "";

        configuracoes.categorias.forEach(categoria => {
            const opcao = document.createElement("option");

            opcao.value = categoria;
            opcao.textContent = categoria;

            campo.appendChild(opcao);
        });
    });
};

const mostrarMensagem = (texto) => {
    mensagem.textContent = texto;
    mensagem.style.display = "block";
};

let produtosExibidos=produtos;

const salvarProdutos = () => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
};


const carregarProdutos = () => {
    const dadosSalvos = localStorage.getItem("produtos");

    if (dadosSalvos) {
        const produtosSalvos = JSON.parse(dadosSalvos);

        produtos.push(...produtosSalvos);

        if (produtos.length > 0) {
            proximoId = Math.max(...produtos.map(produto => produto.id)) + 1;
        }
    }

    mostrarProdutos(produtos);
    atualizarDashboard();
};


botaoCadastrar.addEventListener("click", () =>{
    const nome = nomeProduto.value.trim();
    const valor = Number(valorProduto.value);
    const quantidade = Number(quantidadeProduto.value);
    const categoria = categoriaProduto.value.trim();

    if (
        nome === "" ||
        valorProduto.value.trim() === "" ||
        !Number.isFinite(valor) ||
        valor < 0 ||
        quantidadeProduto.value.trim() === "" ||
        !Number.isInteger(quantidade) ||
        quantidade < 0 ||
        categoria === ""
    ) {
        alert("Preencha todos os campos corretamente!");
        return;
    }
    
    else{
    produtos.push ({ 
        id:proximoId,
        nome: nome,
        valor: valor,
        quantidade: quantidade,
        categoria: categoria
    })};
    proximoId++;
    mostrarProdutos(produtos);
    atualizarDashboard();
    salvarProdutos();
    mostrarMensagem("Produto cadastrado com sucesso!");

    nomeProduto.value = "";
    valorProduto.value = "";
    quantidadeProduto.value = "";
    categoriaProduto.selectedIndex = 0;
})




const mostrarProdutos = (listaProdutos) => {
    areaProdutos.innerHTML = "";
    produtosExibidos = listaProdutos;

    listaProdutos.forEach((produto, indice) => {
        const ProdutoHTML = `
            <div class="produto-card">

                <div class="produto-imagem">
                    <icon-placeholder>
                        🖼️
                    </icon-placeholder>
                    <span>Imagem do produto</span>
                </div>

                <div class="produto-info">
                    <h3>${produto.nome}</h3>

                    <p>Valor: R$ ${produto.valor.toFixed(2)}</p>
                    <p>Quantidade: ${produto.quantidade}</p>
                    <p class="status-estoque ${
    produto.quantidade === 0
        ? "status-zerado"
        : produto.quantidade <= configuracoes.limiteEstoqueBaixo
            ? "status-baixo"
            : "status-normal"
}">
    ${
        produto.quantidade === 0
            ? "Sem estoque"
            : produto.quantidade <= configuracoes.limiteEstoqueBaixo
                ? "Estoque baixo"
                : "Em estoque"
    }
</p>
</p>
                    <p>Categoria: ${produto.categoria}</p>
                </div>

                <div class="produto-acoes">
                    <button data-id="${produto.id}" data-action="diminuir">−</button>
                    <button data-id="${produto.id}" data-action="aumentar">+</button>
                    <button data-id="${produto.id}" data-action="editar">Editar</button>
                    <button data-id="${produto.id}" data-action="remover">Remover</button>
                </div>

            </div>
        `;

        areaProdutos.innerHTML += ProdutoHTML;
    });
};



areaProdutos.addEventListener("click", (evento) =>{
    const id=Number(evento.target.dataset.id);
    const produto=produtos.find((item)=> item.id===id);
    if(!produto) return;

    console.log(produto);
    console.log(evento.target.dataset.action);
    if(evento.target.dataset.action==="aumentar"){
        produto.quantidade++;
    }    else if(evento.target.dataset.action==="diminuir" && produto.quantidade>0){
        produto.quantidade--;
    }
    else if (evento.target.dataset.action === "remover") {
    const confirmou = confirm(
        `Deseja realmente remover o produto "${produto.nome}"?`
    );

    if (confirmou) {
        produtos.splice(produtos.indexOf(produto), 1);
        mostrarMensagem("Produto removido com sucesso!");
    } else {
        return;
    }
}
    else if(evento.target.dataset.action==="editar"){
        editarNome.value=produto.nome;
        editarValor.value=produto.valor;
        editarQuantidade.value=produto.quantidade;
        editarCategoria.value=produto.categoria;
        modalEdicao.style.display = "block";
        idEmEdicao = produto.id;
    }
    mostrarProdutos(
    produtos.filter(produto => produtosExibidos.some(item => item.id === produto.id))
    );
    atualizarDashboard();
    salvarProdutos();
})

btnCancelar.addEventListener("click", () =>{
    modalEdicao.style.display="none";
    editarNome.value="";
    editarValor.value="";
    editarQuantidade.value="";
    editarCategoria.value="";
    idEmEdicao = null;
})

btnSalvar.addEventListener("click", () => {
    if (idEmEdicao !== null) {
        const produto = produtos.find(item => item.id === idEmEdicao);

        if (!produto) return;

        const nome = editarNome.value.trim();
        const categoria = editarCategoria.value.trim();
        const valor = Number(editarValor.value);
        const quantidade = Number(editarQuantidade.value);

        if (
            nome === "" ||
            categoria === "" ||
            editarValor.value.trim() === "" ||
            !Number.isFinite(valor) ||
            valor < 0 ||
            editarQuantidade.value.trim() === "" ||
            !Number.isInteger(quantidade) ||
            quantidade < 0
        ) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        produto.nome = nome;
        produto.categoria = categoria;
        produto.valor = valor;
        produto.quantidade = quantidade;

        mostrarProdutos(produtos);
        atualizarDashboard();

        modalEdicao.style.display = "none";

        editarNome.value = "";
        editarValor.value = "";
        editarQuantidade.value = "";
        editarCategoria.value = "";

        idEmEdicao = null;
        salvarProdutos();
        mostrarMensagem("Produto atualizado com sucesso!");
    }
});

const atualizarDashboard =() =>{
    let contadorSemEstoque=0;
    let contadorBaixoEstoque=0;
    
    produtos.forEach((produto) =>{
      
   

        if(produto.quantidade===0){
            contadorSemEstoque++;

        }else if(produto.quantidade >=1 && produto.quantidade<= configuracoes.limiteEstoqueBaixo){
            contadorBaixoEstoque++;
        }
    })

   semEstoque.textContent=contadorSemEstoque;
   baixoEstoque.textContent=contadorBaixoEstoque;
   totalProdutos.textContent=produtos.length;



}

botaoPesquisar.addEventListener("click", () =>{
   const pesquisa=campoPesquisa.value.toLowerCase();
   const produtosEncontrados=[];

    for(let i=0; i<produtos.length;i++){
        const produto=produtos[i];
     

        if(produto.nome.toLowerCase().includes(pesquisa)){
            produtosEncontrados.push(produto);
        }
    }
    console.log(produtosEncontrados);
    mostrarProdutos(produtosEncontrados);
})

carregarCategorias();
carregarProdutos();


