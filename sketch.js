const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisions = [];
var plinkos = [];
var particles = [];


var divisionHeight = 300;

function setup() {
 var canvas = createCanvas(480,800);
 engine = Engine.create();
 world = engine.world;
   
   ground = new GROUND(240,780,480,20);

   


}

function draw() {
  background("black");

  for(var k = 0; k <=width; k = k + 80) {
    divisions.push(new DIVISIONS(k, height-divisionHeight/2, 10, divisionHeight));
  }

  
for (var j = 40; j <=width; j = j + 50)
{

plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j = j + 50)
{

plinkos.push(new Plinko(j,175));
}
for (var j = 15; j <=width-20; j = j + 50)
{

plinkos.push(new Plinko(j,275));
}
for (var j = 15; j <=width-30; j = j + 50)
{

plinkos.push(new Plinko(j,375));
}


for(var j = 0; j < particles.length; j++){
  particles[j].display();
}


for(var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
}


for(var k = 0; k < divisions.length; j++){
  divisions[k].display();
}


  ground.display();
  divisionHeight.display();
  
  drawSprites();
}