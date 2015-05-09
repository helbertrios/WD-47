function removerSugestao(event) { 
    $(this).remove();
}

function adicionarSugestao() {
    var digitado = $("input[type=text]").val().trim();
    if (digitado != "") {
        var existente = $(".sugestao").filter( function () {
            var conteudo = $(this).text().trim();
            return (digitado.toUpperCase() == conteudo.toUpperCase());
        });

        if (existente.length > 0) {          
            var  li = existente.parent();
 
            var votos = li.data("votos") + 1;
            
            existente.next().text(votos+ " votos")
            li.data("votos", votos);
        } else {
            $("<li")
                .data("votos", 1)
                .append($("<span>").addClass("sugestao").text(digitado))
                .append($("<span>").addClass("votos").text("1 voto"))
                .appendTo(".sugestoes");
            $("input[type=text]").val("").focus();
        }
    }
}



$("input[type=button]").click( function(event) {
    adicionarSugestao();
});


$('input[type=text]').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
       adicionarSugestao();
    }
});

$(".sugestoes").on("dblclick", "li", removerSugestao);

