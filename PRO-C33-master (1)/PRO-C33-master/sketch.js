var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions = [];  
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle0;
var turns = 0;
var gameState = "play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
  
   text("Score : "+score,20,30);
   text("Turns : "+turns,700,30);

  textSize(30);
   text(200,15,600);
   text(1000,727,600);
   text(200,90,600);
   text(1000,645,600);
   text(400,175,600);
   text(800,575,600);
   text(600,255,600);
   text(600,495,600);
   text(600,335,600);
   text(600,415,600);


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();

    
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-400, width/2+400), 10,10));
     turns++;

     if (particle0 != null) {
      particle0.display();

      if (particle0.body.position.y > 550) {
        
        if (particle0.body.position.x < 160) {
          score = score + 200;
          particle0 = null;
          if(turns > 10) {
            gameState = "end";
            text("GAME OVER",400,400);
          }
        }

        if (particle0.body.position.x < 240 || particle0.body.position > 160) {
          score = score + 400;
          particle0 = null;
          if(turns > 10) {
            gameState = "end";
            text("GAME OVER",400,400);
          }
        }

        if (particle0.body.position.x < 560 || particle0.body.position > 240) {
          score = score + 600;
          particle0 = null;
          if(turns > 10) {
            gameState = "end";
            text("GAME OVER",400,400);
          }
        }

        if (particle0.body.position.x < 640 || particle0.body.position > 560) {
          score = score + 800;
          particle0 = null;
          if(turns > 50) {
            gameState = "end";
            text("GAME OVER",400,400);
          }
        }

        if (particle0.body.position.x > 640) {
          score = score + 1000;
          particle0 = null;
          if(turns > 50) {
            gameState = "end";
            text("GAME OVER",400,400);
          }
        }
      }
    }
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed() {
  if (gameState !== "end") {
    particle0 = new Particle(mouseX , 10 , 10 , 10);
    turns++;
  }
}