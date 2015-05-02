/**
 * Converte um número para uma string de valor formatado.
 */
var numberParaReal = function (numero) {

    var texto = numero.toFixed(2).replace(".", ",");
    var caracteres = texto.split(""); //transforma a string num array
    var invertido = caracteres.reverse(); //inverte o array
    var invertidoComPontos = invertido.slice(0,3); //pega os centavos e a virgula do array
    var contadorDeCasas = 1;
    
    for(var i = 3; i < invertido.length; i++){ //percorre array
            if(contadorDeCasas > 3) {
                    invertidoComPontos.push("."); //se passou de 3 casas, coloca o ponto e volta contador
                    contadorDeCasas = 1;
            }
            
            invertidoComPontos.push(invertido[i]);
            contadorDeCasas++;
    }

    var desinvertidoComPontos = invertidoComPontos.reverse(); //desinverte
    var stringComPontos = desinvertidoComPontos.join(""); //transforma em string de novo
    var resposta = "R$ " + stringComPontos; // coloca R$ na frente
    return resposta; 
}

/**
 * Converte uma string de valor formatado para um número.
 */
var realParaNumber = function (texto) {
    var valor = texto.replace("R$ ", "");
    while (valor.indexOf(".") != -1 ) {
        valor = valor.replace(".", "");
    }
    var valor =  parseFloat(valor.replace(",", "."));
    return valor;
}
