const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var dustbinObj, paperObj, groundObj;
var launcher;

function preload(){

}

function setup() {
	createCanvas(1200,400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObj = new Paper(40,40,20);
    dustbinObj = new Dustbin(1000,450);
    groundObj = new Ground(600,400);
    launcher = new Launcher(paperObj.body,{x:200, y:100});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  groundObj.display();
  paperObj.display();
  dustbinObj.display();
  launcher.display();

  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(paperObj.body,{
        x:mouseX,y:mouseY
    })
}

function mouseReleased() {
    launcher.fly();
}
