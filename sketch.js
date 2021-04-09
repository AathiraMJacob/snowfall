const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backGround,bgImage;
var girl,girlimg;
var snow1;

function preload(){
  // pig_running=loadAnimation("p1.png","p2.png","p3.png");
   bgImage=loadImage("snow1.jpg");
   girlimg=loadImage("person.png");
 }

function setup() {
  createCanvas(1000,1000);
 // engine = Engine.create();
 //   world = engine.world;

  var girl = createSprite(400, 200, 50, 50);
  //girl.addImage("girly",girlimg);
  //girl.velocityX=-4;

 backGround=createSprite(550,350,800,400);
 backGround.addImage("ground",bgImage);
 backGround.scale=2

 snow1= new Snow(300,300,40);
}

function draw() {
  background(255,255,255); 
  //Engine.update(engine);
 //girl.display();
 snow1.display();
  drawSprites();
}