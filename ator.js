//variáveis Jogador
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;


//Mostrar ator
function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

//Movimento do ator
function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
   if (yAtor < 366) 
   {yAtor += 2;
}}}

//Verifica colisao carro - ator
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
  colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15);
  if (colisao){
     colidiu();
    }
  }}

//Calcula pontos depois da colisao
function colidiu(){
  yAtor = 366;
  somDaColisao.play();
  if (meusPontos > 0){
    meusPontos -= 1;
  }
}

//Mostra os pontos na tela
function incluirPontos(){
  stroke(0);
  textAlign(CENTER);
  textSize(25);
  fill(color(50,205,50));
  text(meusPontos, width / 5, 25);
}

//Adciona pontos e reseta posicao ator
function marcaPonto(){
  if (yAtor < 15 ){
    yAtor = 366;
    meusPontos += 1;
    somDoPonto.play();
  }}