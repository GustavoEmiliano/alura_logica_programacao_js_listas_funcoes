// Exercício 1: Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(altura, peso){
  let imc = peso / (altura**2);
  return imc;
}

// Exercício 2: Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculaFatorial(numero){
  let resultado = 1;
  for(let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

// Exercício 3: Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolarParaReais(valorDolar){
  const cotacaoDolar = 4.80;
  let valorEmReais = valorDolar * cotacaoDolar
  return valorEmReais;
}

// Exercício 4: Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculaAreaPerimetroSalaRetangular(altura, largura){
  let area = altura * largura;
  alert(`A área dessa sala retangular é de ${area} metros quadrados`);
  let perimetro = 2 * (altura + largura);
  alert(`O perímetro dessa sala retangular é de ${perimetro} metros`);
}

// Exercício 5: Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculaAreaPerimetroSalaCircular(raio){
  const PI = 3.14;
  let areaSala = PI * (raio ** 2);
  alert(`A área dessa sala circular é de ${areaSala} metros quadrados`);
  let perimetroSala = 2 * PI * raio;
  alert(`O perímetro dessa sala circular é de ${perimetroSala} metros`);
}

// Exercicio 6: Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function exibeTabuadaNumero(numero){
  for(let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}