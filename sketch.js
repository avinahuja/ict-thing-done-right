const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground,ball;
var options , ballOP
var bg
function preload(){
  bg = loadImage("gra.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  options = {
    isStatic:  true
  }
  
  ground = Bodies.rectangle(windowWidth-windowWidth/2,windowHeight-50,windowWidth,20,options);
  World.add(world,ground);

  ballOP = {
    restitution: 1
  }

  ball = Bodies.circle(windowWidth-windowWidth/2,windowHeight-windowHeight/2,20,ballOP);
  World.add(world,ball);
}

function draw() {
  
  background(bg);  
  Engine.update(engine); 
  rectMode(CENTER);
  fill(93,211,12)
    //rect(ground.position.x,ground.position.y,windowWidth,20);
    fill(255,0,0)
    ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
}