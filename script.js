let operador = '';
let num1 = 0;
let num2 = 0;

function agregarNumero(numero) {
  const resultado = document.getElementById('resultado');
  if (resultado.value === '0') {
    resultado.value = numero;
  } else {
    resultado.value += numero;
  }
}

function agregarDecimal() {
  const resultado = document.getElementById('resultado');
  if (!resultado.value.includes('.')) {
    resultado.value += '.';
  }
}

function borrar() {
  const resultado = document.getElementById('resultado');
  resultado.value = '0';
  operador = '';
  num1 = 0;
  num2 = 0;
}

function operacion(op) {
  const resultado = document.getElementById('resultado');
  operador = op;
  num1 = parseFloat(resultado.value);
  resultado.value = '0';
}

function resultado() {
  const resultado = document.getElementById('resultado');
  num2 = parseFloat(resultado.value);
  let total = 0;

  switch (operador) {
    case '+':
      total = num1 + num2;
      break;
    case '-':
      total = num1 - num2;
      break;
    case '*':
      total = num1 * num2;
      break;
    case '/':
      total = num1 / num2;
      break;
    default:
      total = 0;
      break;
  }

  resultado.value = total;
}
