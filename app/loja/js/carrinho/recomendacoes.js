var buscaRecomendacoes = function() {
        $.getJSON("http://mirrorfashion.caelum.com.br/produtos?callback=?",
            function(resposta) {
                var produtos = resposta.produtos;
                var lista = $("<ul>");
                $.each(produtos, function () {
                    var produto = this;
                        $("<li>")
                        .append($("<img>").attr("src", produto.imagem))
                        .append($("<p>").text(produto.nome))
                        .append($("<p>").text(numberParaReal(produto.preco)))
                        .appendTo(lista);
                });
                $("#recomendacoes").find("ul").remove().end().append(lista);
            })
    }

buscaRecomendacoes();
setInterval(buscaRecomendacoes(), 5000);


