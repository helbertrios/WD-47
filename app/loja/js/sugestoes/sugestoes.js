$("input[type=button]").click( function(event) {
    console.log("xxxx");
    var digitado = $("input[type=text]").val();
    $("<li>")
        .append($("<span>").addClass("sugestao").text(digitado))
        .append($("<span>").addClass("votos").text("1 voto"))
        .appendTo(".sugestoes");    
});

$(".sugestoes li").dblclick(function(event) {
        $(this).remove();
});