//Imagens do Jogo
let imagemEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemAtor;

//Sons do Jogo
let somDaTrilha;
let somDoPonto;
let somDaColisao;

//Carregamento de imagens e sons
function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
  somDaColisao = loadSound("Sons/colidiu.mp3");
}