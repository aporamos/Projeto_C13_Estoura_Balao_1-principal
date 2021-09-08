var bow , arrow,  scene;
var bowImage, arrowImage, greenBalloonImage, redBalloonImage, pinkBalloonImage ,blueBalloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redBalloonImage = loadImage("redBalloon0.png");
  greenBalloonImage = loadImage("greenBalloon0.png");
  pinkBalloonImage = loadImage("pinkBalloon0.png");
  blueBalloonImage = loadImage("blueBalloon0.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;
  
  // criando arco para atirar flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0 ;   
}

function draw() {
 background(0);
  // movendo o chão
    scene.velocityX = -3;

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //movendo o arco
  bow.y = World.mouseY;
  
   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("space")) {
    createArrow();
  }
   
  //criando inimigos continuamente
  var selectBalloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (selectBalloon == 1) {
      redBalloon();
    } else if (selectBalloon == 2) {
      greenBalloon();
    } else if (selectBalloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  drawSprites();
  text("Pontuação: "+ score, 300,50);
}

// Criando flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redBalloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueBalloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBalloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkBalloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
}
