
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var blob1, blob2, blob3, blob4, blob5;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,200,220,20);
  
	blob1= new Blob(320,400,40);
	blob2= new Blob(360,400,40);
	blob3= new Blob(400,400,40);
	blob4= new Blob(440,400,40);
	blob5= new Blob(480,400,40);

	rope1 = new Rope(blob1.body, roof.body,-80,-0)
	rope2 = new Rope(blob2.body, roof.body,-42,0)
	rope3 = new Rope(blob3.body, roof.body,0,0)
	rope4 = new Rope(blob4.body, roof.body,42,0)
	rope5 = new Rope(blob5.body, roof.body,80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
roof.display();

blob1.display();
blob2.display();
blob3.display();
blob4.display();
blob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(blob1.body,blob1.body.position,{x:-50,y:-45});
	
	} 
	}


