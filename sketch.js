
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var pap,g;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	pap = new Paper(100,100,20);
	g = new Ground(400,550,1600,10);
	b1 = new Dustbin(500,500,100,PI);
	b2 = new Dustbin(650,500,100,PI);
	b3 = new Dustbin(570,550,150,PI/2)
}


function draw() {
 
	background(0);
  Engine.update(engine);
 
  
 pap.display();
 g.display();
 
 b1.display();
b2.display()
b3.display()

if(keyDown("up"))
{
	Matter.Body.applyForce(pap.body, pap.body.position, {x:20,y:-20})
}


}



