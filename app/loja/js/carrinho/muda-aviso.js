var aviso = document.querySelector(".aviso");
var botao = document.createElement("button");

botao.id = "botaoaviso";
botao.textContent = "Esconder aviso";

aviso.parentNode.insertBefore(botao, aviso);

botao.addEventListener("click", function (evento) {
                aviso.classList.toggle("invisivel");
                this.textContent = aviso.classList.contains("invisivel") ? "Mostrar aviso" : "Esconder aviso";     
});
    
                        