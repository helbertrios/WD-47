$(".filtro input").on("input", function (event) {
    var digitado = $(this).val().trim();
    var itens = $("#carrinho li");
    if (digitado) {
        itens.hide()
        .find("h2,span")
        .filter( function() {
            var conteudo = $(this).text();
            var regex = new RegExp(digitado, "i");
            return regex.test(conteudo);
        })
        .closest("li")
        .show();
    } else {
        itens.show();
    }
});