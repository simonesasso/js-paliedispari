// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

var parolaUtente = prompt("inserisci una parola");

checkPalindromo(parolaUtente);

function checkPalindromo(parola) {
  var splitString = parola.split("");
  var reverseArray = splitString.reverse();
  var parolaInvertita = reverseArray.join("");
  if (parola == parolaInvertita) {
    alert("La parola è palindroma");
  }else {
    alert("La parola non è palindroma");
  }
}
