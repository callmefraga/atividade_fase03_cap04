


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

}



































/* 
let finalResult = "";

escreve();

function escreve() {
  let result = document.getElementById('result');
  result.innerHTML = finalResult;
}

function calcular(simbolo) {
  let n1 = document.getElementsByClassName('firstNumber').value;
  n1 = parseFloat(n1);
  let n2 = document.getElementsByClassName('secondNumber').value;
  n2 = parseFloat(n2);
  // if(!n1) {
  //   alert("primeiro digite o primeiro número");
  //   return;
  // }

  switch(simbolo) {
    case '+':
      finalResult = n1 + n2;
        break;
    case '-':
      finalResult = n1 - n2;
      break;
    case '/':
      finalResult = n1 / n2;
      break;
    case '*':
      finalResult = n1 * n2;
  }

  escreve();
}

*/