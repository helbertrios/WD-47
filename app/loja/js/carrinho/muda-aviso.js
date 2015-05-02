var botao = document.querySelector("#botaoaviso");
botao.addEventListener("click", function (evento) {
                    
                var aviso = document.querySelector(".aviso");
    
                if (aviso.classList.contains("invisivel") ) {
                    this.textContent = "Esconder";                                   
                } else {
                    this.textContent = "Mostrar";
                }
                
                aviso.classList.toggle("invisivel")
                
});
    
                        