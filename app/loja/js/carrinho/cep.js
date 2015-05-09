$("#consulta_cep input[type=submit]").click(function(event) {
    console.log(" entrou consulta cep");
    var cep = $("#input_cep").val();
    var url = "http://cep.correiocontrol.com.br/"+cep+".json";
    $.getJSON(url, function(dados) {
        console.log(" entrou consulta getJson");
        var endereco = dados.logradouro+", "+dados.bairro+", "+dados.localidade+", "+dados.uf;
        console.log(endereco);
        $(".resultado_cep").text(endereco);
    });
    event.preventDefault();
});