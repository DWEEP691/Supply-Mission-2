var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var r1, r2, r3;
var r1s, r2s, r3s;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	r1s = createSprite(500,500,200,20);
	r1s.shapeColor = "aqua";
	r2s = createSprite(500,500,20,100);
	r2s.shapeColor = "aqua";
	r3s = createSprite(500,500,20,100);
	r3s.shapeColor = "aqua";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

    r1 = Bodies.rectangle(width/2, 640, 200, 20, {isStatic:true});
	World.add(world, r1);

	r2 = Bodies.rectangle(290, 600, 20, 100, {isStatic:true});
	World.add(world, r2);

	r3 = Bodies.rectangle(500, 600, 20, 100, {isStatic:true});
	World.add(world, r2);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  r1s.x = r1.position.x;
  r1s.y = r1.position.y;

  r2s.x = r2.position.x;
  r2s.y = r2.position.y;

  r3s.x = r3.position.x;
  r3s.y = r3.position.y;

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
    
  }
}



