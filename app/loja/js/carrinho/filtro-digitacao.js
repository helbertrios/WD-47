(
    function() {
        
        var inputsQuantidades =  document.querySelectorAll("#carrinho input");

        for (var i = 0; i < inputsQuantidades.length; i++) {
            
            var quantidade = inputsQuantidades[i];
            
            quantidade.addEventListener("input", function (event) {
                var valor = this.value;
                var valorSemLetra = valor.replace(/\D/g, "");
                this.value = valorSemLetra;        
            });
        }
}
)();