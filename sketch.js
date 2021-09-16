const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 1200);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(800, width/2-65, 20, 150);
	rightSide = new Ground(1200, width/2-65, 20, 150);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200, 200, 20, ball_options);
	World.add(world, ball);

	rectMode(CENTER);
    //Engine.run(engine);
  
}


function draw() {
  background(51);
  ground.show();
  leftSide.show()
  rightSide.show()
  ellipse(ball.position.x, ball.position.y, 20)
  Engine.update(engine)
  keyPressed()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 2, y: 2})
	}
}



