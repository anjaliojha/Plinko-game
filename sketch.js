const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

}

function draw() {
  background(255,255,255); 


  
  ground.display();
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  drawSprites();
}