const cpf = document.querySelector("#cpf");

cpf.addEventListener("keyup", () => {
  let value = cpf.value.replace(/[^0-9]/g, "").replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
  
  cpf.value = value;
});

var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});

$(document).ready(function() {
    $(".verifica_numerico").keydown(function(e) {
      // Allow: backspace, delete, tab, escape, enter and .
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });
  });

  var cartoes = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})/,
    Mastercard: /^5[1-5][0-9]{14}/,
    Amex: /^3[47][0-9]{13}/,
    DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}/
};

function testarCC(nr, cartoes) {
    for (var cartao in cartoes) if (nr.match(cartoes[cartao])) return cartao;
    return false;
}

var valido = '4444555566667777';
var invalido = '1234567890';

[valido, invalido].forEach(function(teste){
   console.log(testarCC(teste, cartoes)); 
});

// dá VISA, false