


let finalResult = '';

escreve(); 

function escreve() {
  let output = document.getElementById('result');
  output.innerHTML = finalResult;
}

function somar() {
  let n1 = document.getElementById('firstNumber').value; 
  n1 = parseFloat(n1);
  let n2 = document.getElementById('secondNumber').value; 

  if(!n1 || !n2) {
    alert('Ops: Você esqueceu de digitar um número')
    return;
  }

  n2 = parseFloat(n2);
  finalResult = n1 + n2;
  escreve();
}

function subtrair() {
  let n1 = document.getElementById('firstNumber').value; 
  n1 = parseFloat(n1);
  let n2 = document.getElementById('secondNumber').value; 
  n2 = parseFloat(n2);

  if(!n1 || !n2) {
    alert('Ops: Você esqueceu de digitar um número')
    return;
  }


  finalResult = n1 - n2;
  escreve();
}

function dividir() {
  let n1 = document.getElementById('firstNumber').value; 
  n1 = parseFloat(n1);
  let n2 = document.getElementById('secondNumber').value; 
  n2 = parseFloat(n2);

  if(!n1 || !n2) {
    alert('Ops: Você esqueceu de digitar um número')
    return;
  }

  finalResult = n1 / n2;
  escreve();
}

function multiplicar() {
  let n1 = document.getElementById('firstNumber').value; 
  n1 = parseFloat(n1);
  let n2 = document.getElementById('secondNumber').value; 
  n2 = parseFloat(n2);

  if(!n1 || !n2) {
    alert('Ops: Você esqueceu de digitar um número')
    return;
  }

  finalResult = n1 * n2;
  escreve();
}

function limpar() {
  document.getElementById('firstNumber').value = "";
  document.getElementById('secondNumber').value = "";
  let clean = document.getElementById('result');
  clean.innerHTML = "";
}