var fixedShape, movingShape;
var rect1, rect2;
var square1 , square2;


function setup() {
  createCanvas(800,400);
  fixedShape = createSprite(400, 200, 50, 50);
  fixedShape.shapeColor = "green";

  movingShape = createSprite(200,100,100,50);
  movingShape.shapeColor = "green";

  rect1 = createSprite(20,20,40,40);
  rect1.shapeColor = "blue";
  rect1.velocityY = 2;

  rect2 = createSprite(20,380,40,40);
  rect2.shapeColor = "grey";
  rect2.velocityY = -2;

  square1 = createSprite(200,100,30,30);
  square1.shapeColor = "green";

  square2 = createSprite(600,100,30,30);
  square2.shapeColor = "green";



  
}

function draw() {
  background(255,255,255);  

  movingShape.x = World.mouseX;
  movingShape.y = World.mouseY;
  console.log(movingShape.x-fixedShape.x)
  movingShape.shapeColor = "green";
  fixedShape.shapeColor = "green";
  square1.shapeColor = "green";
  square2.shapeColor = "green";

 if(touch(movingShape,fixedShape)){//argument
  movingShape.shapeColor = "red";
  fixedShape.shapeColor = "red";
 }
 if(touch(movingShape,square1)){//argument
  movingShape.shapeColor = "red";
  square1.shapeColor = "red";
 }

 if(touch(movingShape,square2)){//argument
  movingShape.shapeColor = "red";
  square2.shapeColor = "red";
 }
 
bounce(rect1 , rect2)
  
  drawSprites();
}

