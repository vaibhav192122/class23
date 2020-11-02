const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var engine,world
var box1;
var ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(200,100,50,50);
  box2 =new Box(240,50,50,70);
ground=new Ground(200,390,800,20);

}

function draw() {
  background("black"); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}