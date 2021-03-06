
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,800,30);
	hammer = new Hammer(200,200);
	stone = new Stone(100,400,PI/6);
	
	sand1 = new Sand(300,200);
	sand2 = new Sand(301,200);
	sand3 = new Sand(302,200);
	sand4 = new Sand(303,200);
	sand5 = new Sand(304,200);
	sand6 = new Sand(301,202);
	sand7 = new Sand(302,204);
	sand8 = new Sand(303,206);
	sand9 = new Sand(304,208);

	rubber = new Rubber(500,200);

	brick = new Brick(700,200);

;
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  ground.display();
  hammer.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  rubber.display();
  brick.display();
  

}



