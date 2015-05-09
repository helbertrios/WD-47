$("#consulta_cep input[type=submit]").click(function(event) {
    var cep = $("#input_cep").val();
    var url = "http://cep.correiocontrol.com.br/"+cep+".json";
    $.getJSON(url, function(dados) {
        var endereco = dados.logradouro+", "+dados.bairro+", "+dados.localidade+", "+dados.uf;
        $(".resultado_cep").text(endereco);
    });
    event.preventDefault();
});