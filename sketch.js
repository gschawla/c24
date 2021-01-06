
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2,dustbin3,ground,ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
dustbin1=new dustbin(300,200,10,100)
dustbin1.debug=true;	

ground=new Ground(100,400,2000,5)

ball= new Ball(200,200,2) 

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustbin1.display();
 ground.display();
 ball.display();
}



