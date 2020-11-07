
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1;
var Dustbin1,Dustbin2,Dustbin3,DustbinImage,dustbin;
var Ground1;

function preload(){
	DustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Paper1 = new Paper(50,690,70);
	
	Dustbin1 = new Dustbin(600,690,135,20);
	Dustbin2 = new Dustbin(540,625,20,150);
	Dustbin3 = new Dustbin(660,625,20,150);

	Ground1 = new Ground(400,700,800,20);

	Engine.run(engine);

	dustbin = createSprite(600,615,20,20);
	dustbin.addImage(DustbinImage);
	dustbin.scale = 0.5;	
}


function draw() {
  rectMode(CENTER);
  background(255);

  Paper1.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  Ground1.display();
  KeyPressed();
  
  drawSprites();
}

function KeyPressed(){
	if(keyWentUp("UP_ARROW")){
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:	150,y: -250})
	}
}



