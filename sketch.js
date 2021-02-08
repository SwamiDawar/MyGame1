const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var car;
var thing;
var tester = true;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(250, 350, 500, 100);
    World.add(world, ground);

    car = new Box(200, 100, 50, 50);
    World.add(world, car);

    ramp = new Log(500, 300, 100, 10, PI/-6);

    landingArea = new Ground(1000, 400, 300, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    car.display();
    ramp.display();
    landingArea.display();
    if(tester === true){
      if(keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(car.body, car.body.position, {x:225, y:0});

        tester = false;
      }
    }
}
