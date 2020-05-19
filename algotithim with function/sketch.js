var movingrect, fixedrect,fixedrect2,movingrect2,movingrect3,fixedrect3

function setup() {
  createCanvas(800,400);
 movingrect =  createSprite(400, 200, 50, 50);
 movingrect.shapeColor = "red";
 movingrect.velocityX = -3;
 fixedrect =  createSprite(100,200,50,50);
 fixedrect.shapeColor = "red";
fixedrect.velocityX = 3;
movingrect2 =  createSprite(200, 400, 50, 50);
movingrect2.shapeColor = "red";
movingrect2.velocityY = -3;
fixedrect2 =  createSprite(200,100,50,50);
fixedrect2.shapeColor = "red";
fixedrect2.velocityY = 3;
movingrect3 =  createSprite(300, 100, 50, 50);
movingrect3.shapeColor = "purple";
movingrect3.velocityX = -3;
fixedrect3 =  createSprite(50,100,50,50);
fixedrect3.shapeColor = "purple";
fixedrect3.velocityX = 3;
}

function draw() {
  background(200,230,210);  
 /* movingrect.y = mouseY;
  movingrect.x = mouseX;*/
 

  if (istouching(movingrect,fixedrect)){
    movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "yellow";
  }
  else  {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  if (istouching(movingrect3,fixedrect3)){
    movingrect.shapeColor = "purple";
    fixedrect.shapeColor = "purple";
  }
  else  {
    movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "yellow";
  }
  bounceoff(movingrect2,fixedrect2);
    
  drawSprites();
}

