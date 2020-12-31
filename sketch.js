const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	slab1=new GroundClass(450,235,30,40);
    slab2=new GroundClass(420,195,30,40);
    //STACK 1

    //level 1
    block1=new Box (330,235,30,40);
    block2=new Box (360,235,30,40);
    block3=new Box (390,235,30,40);
    block4=new Box (420,235,30,40);
    block5=new Box (450,235,30,40);
   // level 2
    block6=new Box (360,195,30,40);
    block7=new Box (390,195,30,40);
    block8=new Box (420,195,30,40);
    //level 3
    block9=new Box (390,155,30,40);
    
    //STACK 2

    //level 1
    block10=new Box (430,135,30,40);
    block11=new Box (460,135,30,40);
    block12=new Box (490,135,30,40);
    block13=new Box (520,135,30,40);
    block14=new Box (550,135,30,40);
   // level 2
    block15=new Box (360,95,30,40);
    block16=new Box (390,95,30,40);
    block17=new Box (420,95,30,40);
    //level 3
    block18=new Box (390,55,30,40);
	
	Engine.run(engine);

	
}





function draw() {
  slab1.display();
 slab2.display();

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 
 block10.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 
 

}

