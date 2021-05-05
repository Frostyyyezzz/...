var fixedRect1,fixedRect2,fixedRect3,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(600, 400, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching()) {
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
  }
  drawSprites();
}



function isTouching(f,m) { 
  if (m.x - f.x < f.width/2 + m.width/2 
    && f.x - m.x < f.width/2 + m.width/2 
    && m.y - f.y < f.height/2 + m.height/2 
    && f.y - m.y < f.height/2 + m.height/2) { 
      return true; } 
    else
    { return false; 
    } 
  }