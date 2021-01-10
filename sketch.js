var car,wall;
var speed,weight;
var collide;
function setup() {
  createCanvas(1600,1000);
  speed= random(55,90);
  weight= random(400,1500);
  car=createSprite(50,200,20,20);
  wall=createSprite(1000,200,10,height/2);
  car.velocityX=speed;  
  wall.shapeColor=color(0,0,255);  
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
      if(deformation>180)
        {
          car.shapeColour=color(255,0,0);
        }
       if(deformation<180 && deformation>100)
        {
         car.shapeColor=color(230,230,0);
        }
        if(deformation<100)
        {
          car.shapeColor=color(0,255,0);
        }
  }
  text("If the Color is :",500,400);
  text("Green=Good",500,420);
  text("Yellow=Average",500,440);
  text("Red=Lethal",500,460);
  car.collide(wall);
  drawSprites();
}