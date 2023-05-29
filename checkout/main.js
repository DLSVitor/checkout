var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});


document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

function calcularPreco() {
    let quantidadeInput = document.getElementById("quantidade");
    let quantidade = parseInt(quantidadeInput.value);
    let precoUnitario = 50.0;  // Preço unitário do produto

    if (quantidade >= 4) {
      desconto = 0.1;  // 10% de desconto
    } else {
      desconto = 0;
    }

    let precoTotal = quantidade * precoUnitario;
    let precoComDesconto = precoTotal - (precoTotal * desconto);

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
