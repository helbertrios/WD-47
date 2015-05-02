function adicionarSugestao() {
    var digitado = $("input[type=text]").val();
    if (digitado != "") {
        $("<li>")
            .append($("<span>").addClass("sugestao").text(digitado))
            .append($("<span>").addClass("votos").text("1 voto"))
            .appendTo(".sugestoes");
        $("input[type=text]").val("").focus();
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


$(".sugestoes li").dblclick(function(event) {
        $(this).remove();
});

