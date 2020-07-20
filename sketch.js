const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(400, 780, 800, 20);
  for(var k = 0; k < 800; k = k + 80){
    division = new Divisions(k, 650, 10, divisionHeight)
    divisions.push(division)
}
  for(var i = 40; i < 800; i = i + 50){
  plinko = new Plinko(i, 50)
  plinkos.push(plinko);
  }
  for(var i = 40; i < 800; i = i + 75){
    plinko = new Plinko(i, 150)
    plinkos.push(plinko);
    }
    for(var i = 40; i < 800; i = i + 50){
      plinko = new Plinko(i, 250)
      plinkos.push(plinko);
      }
      for(var i = 40; i < 800; i = i + 75){
        plinko = new Plinko(i, 350)
        plinkos.push(plinko);
        }

}
  

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  if(frameCount % 30 === 0){
    particle = new Particle(random(300, 500), 10, 10);
    particles.push(particle)
  }
  ground.display();
  for(var k = 0; k < divisions.length; k++) 
  divisions[k].display();
  for(var i = 0; i < plinkos.length; i++)
  plinkos[i].display();
  for(var j = 0; j < particles.length; j++)
  particles[j].display();
  drawSprites();
}