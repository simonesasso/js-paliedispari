// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  // Sommiamo i due numeri e dichiariamo chi ha vinto.

var iniziaGioco = document.getElementById("btn-gioca");

iniziaGioco.addEventListener("click",function functionName() {
  pariDispari();
})


function pariDispari() {
  var num1 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  var num2 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  var somma = num1 + num2;
  if (somma % 2 == 0) {
    document.getElementById("messaggio").innerHTML = "Ha vinto pari";
  }else {
    document.getElementById("messaggio").innerHTML = "Ha vinto dispari";
  }
  document.getElementById("num1").innerHTML = "il primo numero è: " + num1;
  document.getElementById("num2").innerHTML = "il secondo numero è: " + num2;
}
