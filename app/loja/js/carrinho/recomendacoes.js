
function trataNovoProduto(produto, lista) {
        $("<li>")
        .append($("<img>").attr("src", produto.imagem))
        .append($("<p>").text(produto.nome))
        .append($("<p>").text(numberParaReal(produto.preco)))
        .appendTo(lista);
}

function trataNovosProdutos(evento, retorno) {
    var produtos = retorno.produtos;
    var lista = $("<ul>");
    $.each(produtos, function(){
        trataNovoProduto(this, lista);
    });
    $("#recomendacoes").find("ul").remove().end().append(lista);
}

$("#recomendacoes").on("novosProdutos", trataNovosProdutos);


function disparaNovosProdutos(retorno){
    $("#recomendacoes").trigger("novosProdutos", retorno);
}

function buscaRecomendacoes() {
        $.getJSON("http://mirrorfashion.caelum.com.br/produtos?callback=?", disparaNovosProdutos);
}

buscaRecomendacoes();
setInterval(buscaRecomendacoes, 5000);


