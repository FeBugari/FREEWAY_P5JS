//variáveis carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = 50;
let alturaCarros = 40;

//Mostrar veiculos
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
}
}

//Movimento dos veiculos
function movimentoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];  
  if (xCarros[i] < -60){
    xCarros[i] = 600
}}}