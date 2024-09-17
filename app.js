function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

/ * Uma função é responsável por determinar alguma ação dentro do nosso código */
function verificarChute(){
  console.log("O botão foi clicado!"); 
}

