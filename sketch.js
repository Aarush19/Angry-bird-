const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1;

function setup() {
  createCanvas(1200,600);
  myengine = Engine.create();
  myworld = myengine.world;
  box1 = new box(800,500,80,80);
  box2 = new box(1100,500,80,80);
  box3 = new box(800,200,80,80);
  box4 = new box(1100,200,80,80);
  box5 = new box(950,50,80,80);
  ground1 = new ground(600,580,1200,30);
  pig1 = new pig(950,500);
  pig2 = new pig(950,200);
  log1 = new log(950,250,420,PI/2);
  log2 = new log(950,100,420,PI/2);
  log3 = new log(1000,40,200,-PI/8);
  log4 = new log(900,40,200,PI/8);
  bird1 = new bird(100,40);
}

function draw() {
  background(0); 
  Engine.update(myengine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground1.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird1.display();
}