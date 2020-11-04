var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 movingRect = createSprite(200,300,50,50);
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";
 movingRect.debug = true;
 fixedRect.debug = true;
}

function draw() {
  background(0);  

  //movingRect code
   movingRect.x = World.mouseX;
   movingRect.y = World.mouseY;

   // collide code 1
    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
      fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
      fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 &&
      movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
     fixedRect.shapeColor = "red";
     movingRect.shapeColor = "red"; 
    }
    else{
     fixedRect.shapeColor = "green";
     movingRect.shapeColor = "green"; 
    }


  drawSprites();
}