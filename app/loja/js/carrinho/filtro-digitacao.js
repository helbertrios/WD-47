$("#carrinho input").filtraLetras();
(
    $.fn.filtraLetras = 
        function() {

            $(this).on("input", function (evento) {
                var valor = $(this).val();
                var valorSemLetra = valor.replace(/\D/g, "");
                $(this).val(valorSemLetra);
            });
        }
)();