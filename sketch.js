var Paper1, Roof1, dustbin1, dustbin2, dustbin3, dustbin2Img, bg1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
//function preload()
//{

//}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper();
	ground = new Ground(200,680,2000,10);
	dustbin1 = new Dustbin(490,630,20,100);
	dustbin2 = new Dustbin(610,670,250,20);
	dustbin3 = new Dustbin(740,630,20,100);
	launcher1 = new Launcher(paper1.body,{x:100,y:200});

	//dustbin2.addImage(dustbin2Img);

	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  paper1.display(); 
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  launcher1.display();
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.07,y:-0.15})
	}
}

function mouseDragged()
{
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	launcher1.fly();
}


