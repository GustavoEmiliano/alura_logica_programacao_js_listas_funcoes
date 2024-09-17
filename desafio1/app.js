/* Desafio 1: 
   Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio. 
*/

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio"

/* Desafio 2: 
   Crie uma função que exiba no console a mensagem "O botão foi clicado" sempre que o botão Console for pressionado.
*/

function exibirMensagemNoConsole(){
  console.log("O botão console foi clicado!");
}

/* Desafio 3: 
   Crie uma função que exiba um alerta com a mensagem: "Eu amo JS", sempre que o botão Alerta for pressionado.
*/
function exibirAlerta(){
  alert("Eu amo JS");
}


/* Desafio 4: 
   Crie uma função que é executada quando o botão Prompt for clicado, perguntando o nome de uma cidade do Brasil. 
   Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: 
   "Estive em {cidade} e lembrei de você".
*/

function exibirPrompt(){
  let cidade = prompt("Qual cidade você mora?");
  alert(`Estive em ${cidade} e lembrei de você`);
}

/* Desafio 5: 
   Ao clicar no botão Soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
*/

function somandoDoisNumeros(){
  let num1 = parseInt(prompt("Entre com o primeiro número inteiro: "));
  let num2 = parseInt(prompt("Entre com o segundo número inteiro: "));
  let soma  = num1 + num2;
  alert(`A soma de ${num1} + ${num2} é:  ${soma}`);
}