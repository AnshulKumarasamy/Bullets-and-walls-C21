var wall, thickness;
var bullet, speed, weight; 
var canvas;

function setup() {
  canvas = createCanvas(1600,400,);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX=6;

  thickness = random (22,83);

  wall = createSprite(1200,200, thickness, canvas.height/2);
  wall.shapeColor= color(80,80,80); 

  speed= random(223,321);
  weight= random(30,52);

}

function draw() {
  background(0);  

  if(wall.x-bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX=0; 
    
    var damage =0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage>10){
      bullet.shapeColor="red";
    }

    if(damage<10){
      bullet.shapeColor= "green";
    }
  }

  drawSprites();
}