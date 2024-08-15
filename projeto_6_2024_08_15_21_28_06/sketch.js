let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600, 600);
  palavra = diogo();
  som.loop();
  
}
function preload(){
  imagem = loadImage("imagem.jpg");
  som = loadSound("som.mp3");
}

function draw() {
  
  batata();
  diogo();
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX, 0, width,1, palavra.length);
  let inicio = palavra.substring(0,aparecer); 
  text(inicio, 300, 300);
}
  
function batata (){
  background("violet");
  image(imagem,0,0,600,600);
  fill("pink");
  textSize(60);
  textAlign(CENTER,CENTER);
  
}

function diogo(){
let palavras = ["corinthians", "Cássio", "1910","timão"];
return random(palavras);
}