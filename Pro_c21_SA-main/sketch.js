const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var setaD, setaC;
var ball;
var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  setaD = createImg("right.png");
  setaD.position(220,30);
  setaD.size(50,50);
  setaD.mouseClicked(forcax);

  setaC = createImg("up.png");
  setaC.position(20,30);
  setaC.size(50,50);
  setaC.mouseClicked(forcay);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var ball_options = {
   restitution:0.7
 }
 ball = Bodies.circle(200,100,10,ball_options);
 World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,10);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function forcay(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function forcax(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}