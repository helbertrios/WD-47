
var aviso = document.querySelector(".aviso");
var botao = document.createElement("button");
botao.id = "botaoaviso";
botao.textContent = " - Esconder Aviso";
botao.classList.add("formataBotaoAviso");
aviso.parentNode.insertBefore(botao, aviso);


botao.addEventListener("click", function (event) {

aviso.classList.toggle("invisivel");
                       
    if (aviso.classList.contains("invisivel")) {
        this.textContent = " + Mostrar Aviso";
    } else {
        this.textContent = " - Esconder Aviso";
    }
    
});