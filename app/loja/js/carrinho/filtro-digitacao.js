(
    function() {
        
        var inputsQuantidades =  $("#carrinho input");
        
        $("#carrinho input").on("input", function (evento) {
            var valor = $(this).val();
            var valorSemLetra = valor.replace(/\D/g, "");
            $(this).val(valorSemLetra);
        });
    }
)();