const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundImage;
 var ground;

function preload(){
    backgroundImage = loadImage("images/bg.jpg");
}



function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new  Ground(600,790,1200,10); // parameters to create

}

function draw(){
   background(backgroundImage);
   Engine.update(engine);

   ground.display();
    
}


  
