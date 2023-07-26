//VARIÁVEIS DA BOLINHA
let xBolinha = 300
let yBolinha = 200
let diametro = 15
let raio = diametro / 2

//VARIÁVEIS DA VELOCIDADE DA BOLINHA
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6
function setup() {
  createCanvas(600, 400);
}

//VARIÁVEIS DA RAQUETE.
let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 8
let raqueteAltura = 100
let colidiu = false

//PLACAR DO JOGO.
let meusPontos = 0
let pontosDoOponente = 0

//VARIÁVEIS DA RAQUETE DO OPONENTE.
let xRaqueteOponente = 585
let yRaqueteOponente = 150

//VARIÁVEIS DA VELOCIDADE DA RAQUETE DO OPONENTE.
let velocidadeYOponente = 6

//SONS DO JOGO.
let ponto

function preload (){
  ponto = loadSound ("sonzinho.mp3")
}
function draw() {
  background(0)
  mostraBolinha ()
  movimentaBolinha()
  verificaColisaoBorda()
  mostraRaquete (xRaquete, yRaquete)
  movimentaMinhaRaquete ()
  verificaColisaoRaqueteBiblioteca ()
  mostraRaqueteOponente (xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente ()
  incluiPlacar ()
  marcaPonto ()
}

function mostraBolinha (){
    circle(xBolinha, yBolinha, diametro)
  
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function verificaColisaoBorda (){
     if (xBolinha + raio > width ||
    xBolinha - raio < 0){
    velocidadeXBolinha *= -1
    }
  if (yBolinha + raio > height ||
      yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1
  }
}

function mostraRaquete (x, y){
  rect (x, y, raqueteComprimento, raqueteAltura)
}

function mostraRaqueteOponente (){
  rect (xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
}

function movimentaMinhaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete)
  {
    velocidadeXBolinha *= -1
  }
}

function verificaColisaoRaqueteBiblioteca(){
  colidiu =
collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1
  }
}

function movimentaRaqueteOponente (){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10
  }
}

function incluiPlacar (){
  stroke (255)
  textAlign (CENTER)
  textSize (16)
  fill (color(128,0,128))
  rect (150, 10, 40, 20)
  fill (255)
  text (meusPontos, 170, 26)
  fill (color(128,0,128))
  rect (450, 10, 40, 20)
  fill (255)
  text (pontosDoOponente, 470, 26)
}

function marcaPonto (){
  if (xBolinha > 590){
    meusPontos += 1
    ponto.play()
  }
  if (xBolinha < 10){
    pontosDoOponente += 1
    ponto.play()
  }
}