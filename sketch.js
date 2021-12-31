const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ovni1;
var ovni2;
var ovni3;
var piedraroja;
var meteorito;
var lanzador;
var plataforma1;
var plataforma2; 
var plataforma3;
var fondo;
var golpeSonido;

function preload(){
  golpeSonido=loadSound("golpeplatillo.mp3");
  fondo=loadImage("espacioazul.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  plataforma1=new plataForma(700,120,10,1);
  plataforma2=new plataForma(600,220,10,1);
  plataforma3=new plataForma(680,340,10,1);
  //Crea los ovnis
  ovni1=new platilloVolador(700,100,50);
  ovni2= new platilloVolador(600,200,50);
  ovni3=new platilloVolador(680,330,50);
  //Crea la piedra roja
  piedraroja=new piedraRoja(50,200,30);
  lanzador=new lanzaDor(piedraroja.body,{x:100,y:100});
}

function draw() {
  background(fondo);
  textSize(20);
  fill("lightyellow");
  text("Lanza la piedra con el mouse y tira los ovnis",50,20);
  text("Tecla espacio para recoger la piedra",50,40);
  // No descomentar estas lineas
  // plataforma1.display();
  // plataforma2.display();
  // plataforma3.display();
  //Engine.update(engine);
  ovni1.display();
  ovni2.display();
  ovni3.display();
  //console.log(ovni3.body.speed);
  piedraroja.display();
  lanzador.display();

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(piedraroja.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  lanzador.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(piedraroja.body,{x:100,y:200})
    lanzador.attach(piedraroja.body);
  }
}