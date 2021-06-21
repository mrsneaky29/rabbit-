var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
var appleGroup,leafGroup;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("Apple fruit image_edited.jpg")
  leafImg=loadImage("Leaf_photo_1.jpg")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.VelocityX=World.mouseX;
rabbit.x=mouseX
}


function draw() {
  background(220);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_sprites == 1) {
      createApples()
    }
    else {
      createLeaves()
    }
  }
}

function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.velocityY=0.2
  apple=lifetime=300;
}

function createLeaves(){
  leaf=createSprite(Math.round(random(50,350)),350)
  leaf.addImage(leafImg)
  leaf.velocityY=0.2
  leaf=lifetime=300
}