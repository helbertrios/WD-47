var quantidades = document.querySelectorAll("input[id$=quantidade]");

for (var i = 0; i < quantidades.length; i++) {
    
    var inputQuantidade = quantidades[i];
    inputQuantidade.addEventListener("input",  function(evento) {
        var quantidade = this.value;
        var li = this.parentNode.parentNode.parentNode;
        var spanUnitario = li.querySelector("span[id$=unit]");
        var valorUnitario = formatador.realParaNumber(spanUnitario.textContent);
        var novoTotal = quantidade * valorUnitario;
        var spanTotal = li.querySelector("span[id$=total]");
        spanTotal.textContent = formatador.numberParaReal(novoTotal);
    });
 }