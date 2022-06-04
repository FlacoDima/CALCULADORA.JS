//Declaramos Variables
var operandoa;
var operandob;
var operacion;

function init() {
//Variables
Resultado = document.getElementById('Resultado');
Reset = document.getElementById('Reset');
RaizCuadrada = document.getElementById('RaizCuadrada');
Potencia = document.getElementById('Potencia');
Decimal = document.getElementById('Decimal');
Suma = document.getElementById('Suma');
Resta = document.getElementById('Resta');
Multiplicación = document.getElementById('Multiplicación');
División = document.getElementById('División');
Igual = document.getElementById('Igual');
Uno = document.getElementById('Uno');
Dos = document.getElementById('Dos');
Tres = document.getElementById('Tres');
Cuatro = document.getElementById('Cuatro');
Cinco = document.getElementById('Cinco');
Seis = document.getElementById('Seis');
Siete = document.getElementById('Siete');
Ocho = document.getElementById('Ocho');
Nueve = document.getElementById('Nueve');
Cero = document.getElementById('Cero');
}

//Eventos De Click
Uno.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "1";
}
Dos.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "2";
}
Tres.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "3";
}
Cuatro.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "4";
}
Cinco.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "5";
}
Seis.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "6";
}
Siete.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "7";
}
Ocho.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "8";
}
Nueve.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "9";
}
Cero.onclick = function(e){
  Resultado.textContent = Resultado.textContent  + "0";
}
Decimal.onclick = function(e){
 Resultado.textContent = Resultado.textContent + "."
}
Reset.onclick = function(e){
  Resetear();
}
Suma.onclick = function(e){
  operandoa = Resultado.textContent;
  operacion = "+";
  limpiar();
}
Resta.onclick = function(e){
  operandoa = Resultado.textContent;
  operacion = "-";
  limpiar();
}
Multiplicación.onclick = function(e){
  operandoa = Resultado.textContent;
  operacion = "*";
  limpiar();
}
División.onclick = function(e){
  operandoa = Resultado.textContent;
  operacion = "/";
  limpiar();
}
RaizCuadrada.onclick = function(e){
  operandoa = Resultado.textContent;
  operacion = "RaizC";
  resolver();
}
Potencia.onclick = function(e){
  operandoa = Resultado.textContent;
  operacion = "^";
  limpiar();
}
Igual.onclick = function(e){
  operandob = Resultado.textContent;
  resolver();
}

function limpiar(){
  Resultado.textContent = "";
}
function Resetear(){
  Resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
    case "RaizC":
      res = Math.sqrt(operandoa);
      break;
      case "^":
      res = Math.pow(operandoa,operandob);
      break;
  }
  Resetear();
  Resultado.textContent = res;
}