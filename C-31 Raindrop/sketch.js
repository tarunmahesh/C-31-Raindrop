const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dropsArray,drop

function preload(){
    
}

function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    dropsArray = []

    Engine.run(engine)
    
}

function draw(){
    background(0)

    for(var i=0; i<100; i+=3){
        var drop = new Drops(random(0,800),0)
        dropsArray.push(drop)
        drop.display()   
    }
    
    if(drop.body.position.x > 800){
        drop.update()
    }

    Engine.update(engine);
}   

