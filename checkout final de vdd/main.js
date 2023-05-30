var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});

var dataAtual = new Date();
    
// Obtém o mês atual como texto (ex: "Janeiro", "Fevereiro", etc.)
var mesAtual = dataAtual.toLocaleString('pt-BR', { month: 'long' });

// Atualiza o conteúdo do elemento <h6> com o mês atual
document.getElementById('mes-frete').textContent += ' ' + mesAtual;

function calcularPreco() {
  let quantidadeInput = document.getElementById("quantidade");
  let quantidade = parseInt(quantidadeInput.value);
  let precoUnitario = 50.0;  // Preço unitário do produto
  let desconto = 0;

  if (quantidade >= 4) {
    desconto = 0.1;  // 10% de desconto
  }

  let precoTotal = quantidade * precoUnitario;
  let valorDesconto = precoTotal * desconto;
  let precoComDesconto = precoTotal - valorDesconto;

  let descontoElement = document.getElementById("desconto");
  descontoElement.textContent = "Desconto aplicado: " + (desconto * 100) + "%";

  let precoFinalElement = document.getElementById("precoFinal");
  precoFinalElement.textContent = "R$ " + precoComDesconto.toFixed(2);
}

let quantidadeInput = document.getElementById("quantidade");
quantidadeInput.addEventListener("input", calcularPreco);

  function alterarImagem(src) {
    var imagem = document.getElementById("imagem");
    imagem.src = src;
}



// Adicionando o evento de clique para cada botão
document.getElementById("botao1").addEventListener("click", function() {
    alterarImagem("midia/azul.jpg");
});

document.getElementById("botao2").addEventListener("click", function() {
    alterarImagem("midia/vermelho.jpg");
});

document.getElementById("botao3").addEventListener("click", function() {
    alterarImagem("midia/preto.jpg");
});


