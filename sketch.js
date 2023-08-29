/*
FREEWAY EM JAVASCRIPT
Criado por FeBugari 
AULA DE LOGICA DE PROGRAMAÇÃO PELA ALURA
PROFESSOR: Guilherme Lima.
Versão v0.0.1 | 21 de Agosto de 2023.
*/

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraCarro();
  movimentoCarro();
  mostraAtor();
  movimentoAtor();
  verificaColisao();
  incluirPontos();
  marcaPonto();
}