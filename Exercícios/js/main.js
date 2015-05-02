var numero = 10000001.9
var formatado   = numberParaReal(numero);
numero          = realParaNumero(formatado);
console.log(formatado);
console.log(numero);

console.log(soma("Quanto é 10 mais 20?"));

var ancora = document.querySelector("#a1");
ancora.addEventListener("click", function(event) {
    alert("Celiquei "+this.textContent); 
    event.preventDefault(); 
});