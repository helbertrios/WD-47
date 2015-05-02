var botao = document.querySelector("#botaoaviso");
botao.addEventListener("click", function (evento) {
                    
                var aviso = document.querySelector(".aviso");
    
                aviso.classList.toggle("invisivel");

                if (aviso.classList.contains("invisivel") ) {
                    this.textContent = "Mostrar";                                   
                } else {
                    this.textContent = "Esconder";
                }
                
               
                
});
    
                        