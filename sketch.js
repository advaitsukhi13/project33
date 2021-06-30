var background , bgImg;
var boy1 , boy2;

function preload() {
  bgImg = loadImage("snow2.jpg");
  snowfallImg.loadImage("snow/download.webp");
  snowfallImg2.loadImage("snow/download(2).webp");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  boy1 = new Children (300,200,50,30);
  
}

function draw() {
  background(bgImg);  
  drawSprites();
  snowfall();
}

function snowfall(){
snowfall=new Snowfall(400,200,20,20);
  snowfall.addAnimation(snowfallImg);
  snowfall.y=Math.round(random(100,550));
  snowfall.velocityY = -8;
  snowfall.setLifetime=50;
}

function children(){
  this.body.x = mouseX; 
  if(this.body.y === 32){
    this.body.y = this.body.y-10;
    this.body.y = this.body.y+10;
}
}