(
    function () {
        $("<button>").attr("id", "botaoaviso").text("Esconder aviso").click( function(event) {        
                $(".aviso").toggle();
                $(this).text( $(".aviso").is(":visible") ? "Esconder aviso" : "Mostrar aviso" ) 
        }).insertBefore(".aviso");
    }
)();