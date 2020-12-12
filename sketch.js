const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world, ground, box1, box2; 



function setup() {
  createCanvas(1500-300,400);
   engine= Engine.create();
   world= engine.world; 
   box1= new Box(700,320,70,70);
   box2= new Box(920,320,70,70);
   ground= new Ground(600,height,1200,20);
   pig= new Pig(810,350);
   log1= new Log(810,260,300,PI/2);
   box3= new Box(700,240,70,70);
   box4= new Box(920,240,70,70);
   log2= new Log(810,180,300,PI/2);
   
  /*
   
   box4= new Box();
   box5= new Box();
   
   bird= new Bird();
   
   log1= new Log();
   log3= new Log();
   log2= new Log();
   log4= new Log();
   
   pig2= new Pig();
*/
  

  
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig.display();
  log1.display();
  box3.display();
  box4.display();
  log2.display();
  
  
}