var wall,carimg,car;
var speed = 0,weight = 0;
var deformation = 0;
var rating = "NaN";
function preload(){
carimg = loadImage("redcar.png");
}


function setup() {
  createCanvas(1000,400);
  wall = createSprite(750, 200, 20, 200);
  wall.shapeColor = "black";
  car = createSprite(50,200,30,10);
  car.addImage("car",carimg);
  car.scale = 0.2;
  speed =Math.round(random(50,90));
  weight = Math.round(random(400,1500));
  car.debug = true;
  wall.debug = true;
}

function draw() {
  background("lightblue"); 
  if(keyDown("space")){
    car.velocityX =speed;
}
console.log("diff :" + (wall.x-car.x));
console.log("width : "+ car.width/2 +wall.width/2);
if(wall.x - car.x < wall.width/2 + car.width/100){
  deformation = (0.5*weight*speed*speed)/22500;
  if(deformation<100){
    wall.shapeColor = "green";
    rating = "A-";
    car.velocityX =0;
  }
//can you check now  ?
//not working,same issue

//sending you screen shot
  else if(deformation>=100 && deformation<180){
    wall.shapeColor = "yellow";
    rating = "B+"
    car.velocityX = 0;
  }
  else if(deformation >=180){
    wall.shapeColor = "red";
    rating = "D-";
    car.velocityX = 0;
  }
  else{
    wall.shapeColor = "black";
    car.velocityX = 0;
    
  }
}
text("Speed :"+ speed,400,30);
text("Deformation : "+ deformation,400,60);
text("Weight :" + weight,400,90);
text("Rating :" + rating , 400,120); 

  

  
  drawSprites();
}
