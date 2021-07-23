var path, pathImage, Jake, jakeImage;
var rightBoundary, leftBoundary;
var coin, coinImage, bomb, bombImage;
var drink, drinkImage, powerText, powerTextImage;

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  jakeImage = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", 
  "jake4.PNG", "jake5.png");
  coinImage = loadImage("coin.png");
  bombImage = loadImage("bomb.png");
  drinkImage = loadImage("energyDrink.png");
  powerTextImage = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);

  //making the moving background path
  path = createSprite(200,200);
  path.addAnimation("RunningPathBg", pathImage);
  path.scale = 1.2;
  path.velocityY = 5;
  
  //making Jake the running surfer boy
  Jake = createSprite(200,300);
  Jake.addAnimation("runningBoy", jakeImage);

  //making the right invisible boundary
  rightBoundary = createSprite(20,200,50,400);
  rightBoundary.visible = false;
  
  //making the left invisible boundary
  leftBoundary = createSprite(385,200,50,400);
  leftBoundary.visible = false;

  //creating the coin
  coin = createSprite(200,100);
  coin.addAnimation("coin", coinImage);
  coin.scale = 0.5;
  coin.rotationSpeed = 5;
  
  //creating the bomb
  bomb = createSprite(100,190);
  bomb.addAnimation("bomb", bombImage);
  bomb.scale = 0.1;
  bomb.rotationSpeed = -2;

  //creating the energy drink
  drink = createSprite(320,140);
  drink.addAnimation("drink", drinkImage);
  drink.scale = 0.1;
  drink.rotationSpeed = 2;

  //shows the power text
  powerText = createSprite(100,60);
  powerText.addAnimation("powerText", powerTextImage);
  powerText.scale = 0.2;
  powerText.rotation = 320;
}

function draw() {
  background(0);

  //Makes Jake move left/right according to mouse
  Jake.x = World.mouseX;

  //resetting the moving path background
  if(path.y > 400){
    path.y = height/4;
  }

  //Code to make Jake collide with the invisible boundaries
  Jake.collide(rightBoundary);
  Jake.collide(leftBoundary);
  
    //makes the objects rotate the opposite way
    if(keyDown("up") && drink.rotationSpeed == 2 && 
    bomb.rotationSpeed == -2 && coin.rotationSpeed == 5){
    drink.rotationSpeed = -2;
    bomb.rotationSpeed = 2;
    coin.rotationSpeed = -5;
  }
  if(keyDown("down") && drink.rotationSpeed == -2 && 
    bomb.rotationSpeed == 2 && coin.rotationSpeed == -5){
    drink.rotationSpeed = 2;
    bomb.rotationSpeed = -2;
    coin.rotationSpeed = 5;
  }

  drawSprites();
}
