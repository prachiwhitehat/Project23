var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var red1,red2,red3;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2,640, width,10);
	groundSprite.shapeColor=color(255);

	var package_options= {
		restitution :0.4,
		isStatic : true
	}


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 options = {
		 isStatic : true, 
	 }

	 red1 = Bodies.rectangle(340,590,20,100,options);
	 red2 = Bodies.rectangle(400,630,100,20,options);
	 red3 = Bodies.rectangle(460,590,20,100,options);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(252,180,90);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  keyPressed(packageBody);
  fill("red");
  rect(red1.position.x,red1.position.y,20,100);
  rect(red2.position.x,red2.position.y,100,20);
  rect(red3.position.x,red3.position.y,20,100);

  drawSprites();
 
}

function keyPressed(body) {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(body,false);
  }
}



