var red,redimage,redback,redbackimage;
var red2,boom2,chuck2,cabage2;
var starwars,starimage;
var b,bimage;
var music
var start,startimage;
var im,imimage;
var next;
var nextimage;
var s
// red var 
var deadline;
var spin,spin2,spin3,spin4,spin5,spinimage;
var yr;
var yr2;
var rground;
var rground2;
var q2;
var rground3;
var rground4;
var rground5;
var rground6;
var rground7;
var li;
var rground8;
var rground9;
var rb1;
var rb2;
var rb3;
var rb4;
var rb5;
var rb6;
var rb7;
var rb8;
var rb9;
var rb10;
var rb11;
var rb12;
var button;
var gate;
var trophy;
var next;
var redlazer1;
var redlazer2;
var rc1;
var rc2;
var rc3;
var rc4;
var rg; 
var rg2;
var rg3;
var rg4;
var mw;
 var life;
var final;
var br;
var em;
var restart;
var home;
var gun,gunimage;
var lifemeter,lifeimage,medium,half,low,verylow;
var  l;
// level2;
var l2b1;
var l2b2;
var l2b3;
var l2b4;
var heart;
var l2b5;
var l2b6;
var l2b7;
var l2b8;
var l2b9;
var l2b10;
var l2b11;
var l2b12;
var l2b13;
var l2b14;
var q3
var l2b15;
var l2b16;
var l2b17;
var l2b18;
var l2b19;
var blockimage;
var l2b20;
var l2b21;
var q;
var l2b22;
var l2b23;
var l2b24;
var l2b25;
var l2b26;
var l2b27;
var l2b28;
var l2b29;
var l2b30;
var l2b31;
var l2b32;
var l2b33;
var l2b34;
var l2b35;
var l2b36;
var l2b37;
var l2b38;
var l1;
var e;
var eimage;
var l2;
var l3;
var In;
var image1;
 var l4;
var l2ground1;
var l2ground2;
var base;
var l2ground3;
var block2;
var l2ground4;
var l2ground5;
var l2ground7;
var l2c2;
var l2c3;
var l2c1;
var l2c4;
var l2c5;
var l2c6;
var l2c7;
var slid;
var deathpart;
var button2;
var fnext;
var level2
var fhome;
var fch;
var o;
var back;
var back2;
var backimage;
var v1,v2,v3,v4,v5,v6,v7,v8;
var t;
var d;
var z
var gameState="start";

function preload(){
redimage=loadImage("red.png");
  backimage=loadImage("back.png");
  bimage=loadImage("final battle.jpg");
  starImage=loadImage("Untitled.png");
  startimage=loadImage("start.png");
  level2=loadImage("level2.png")
  imimage=loadImage("music.png")
   music=loadSound("asap.mp3");
  nextimage=loadImage("next.png")
  redbackimage=loadImage("redflip.png");
  lifeimage=loadImage("full.png");
  medium=loadImage("medium.png");
  image1=loadImage("ins.png")
  block2=loadImage("block2.png")
  half=loadImage("half.png");
  low=loadImage("low.png");
  verylow=loadImage("verylow.png");
  gunimage=loadImage("gun.png")
  eimage=loadImage("dv.jpg")
 s=loadSound("wars.mp3");
  base=loadImage("base.png");
  blockimage=loadImage("block.png")
  t=loadImage("re.png")
  spinimage=loadAnimation("spin1.png","spin2.png","spin3.png","spin4.png","spin5.png");
  chuckimage=loadImage("chuck.png")
  final=loadSound("final.mp3");
  em=loadSound("asap.mp3");
  d=loadImage("h.png");
  z=loadImage("bg.png")
}

function setup() {
 createCanvas(1400,600);
  e=createSprite(300,400);
  e.addImage(eimage)
  e.visible=false;
  e.scale=0.3
  // normal objects
  v1=createSprite(18121,150,8,40);
  v1.visible=false;
  v1.shapeColor="orange"
  
  v2=createSprite(18421,150,8,40);
  v2.visible=false;
  v2.shapeColor="orange"
  
    v3=createSprite(18736,150,8,40);
  v3.visible=false;
  v3.shapeColor="orange"
  
      v4=createSprite(10801,150,8,40);
  v4.visible=false;
  v4.shapeColor="orange"
  
      v5=createSprite(10976,150,8,40);
  v5.visible=false;
  v5.shapeColor="orange"
  
      v6=createSprite(11156,150,8,40);
  v6.visible=false;
  v6.shapeColor="orange"
  
      v7=createSprite(11301,150,8,40);
  v7.visible=false;
  v7.shapeColor="orange"
  
      v8=createSprite(11436,150,8,40);
  v8.visible=false;
  v8.shapeColor="orange"
  
  //200 is real red p  os
red=createSprite(12000,200,20,20);
  red.addImage(redimage);
  red.scale=0.1;
  red.visible=false;

  
  back=createSprite(100,500);
  back.scale=0.4;
  back.addImage(backimage);
  back.visible=false;
  
   back2=createSprite(100,500);
  back2.scale=0.4;
  back2.addImage(backimage);
  back2.visible=false;
  
  chuck=createSprite(12000,200,20,20);
  chuck.addImage(chuckimage);
  chuck.scale=0.1;
  chuck.visible=false;
  

  b=createSprite(300,300);
  b.addImage(bimage);
  b.scale=0.7;
  
  starwars=createSprite(300,150);
  starwars.addImage(starImage);
  starwars.scale=0.7;
  
 start=createSprite(300,300);
  start.addImage(startimage);
  start.scale=0.4;
  
In=createSprite(296,420);
  In.addImage(image1);
  In.scale=0.4;
  In.visible=false;
  
  next=createSprite(530,560);
  next.addImage(nextimage);
  next.scale=0.2
  next.visible=false;
  
  red2=createSprite(300,300);
  red2.addImage(redimage);
  red2.scale=0.7;
  red2.visible=false;
  
  chuck2=createSprite(300,100);
  chuck2.visible=false;
  chuck2.scale=0.2;
  chuck2.addImage(chuckimage);
  
  // red objects
  rground=createSprite(500,500,1000,200);
  rground.shapeColor="brown"
  rground.visible=false;
  rground.addImage(blockimage);
  rground.scale=1.4

  
  
  rb1=createSprite(500,50,400,200)
  rb1.shapeColor="brown"
  rb1.visible=false;
  rb1.addImage(blockimage)
  rb1.scale=0.8
  
  redlazer1=createSprite(500,200,5,100);
  redlazer1.shapeColor="red";
  redlazer1.visible=false;
  
  spin3=createSprite(6763,300);
  spin3.addAnimation("res",spinimage)
  
  spin3.setCollider("circle",0,0,120);
  
    spin5=createSprite(20766,300);
  spin5.addAnimation("res",spinimage)

  spin5.setCollider("circle",0,0,120);
  
  rb2=createSprite(1500,300,800,60);
  rb2.visible=false;
  rb2.addImage(block2)
 
  rb2.scale=1.5
  rb2.setCollider("rectangle",0,0)
  
  rc1=createSprite(1440,250,50,50);
  rc1.shapeColor="red";
  rc1.visible=false;
  
  life=100;
  li=100
  br=30
  
  rc2=createSprite(1740,250,50,50);
  rc2.shapeColor="red";
  rc2.visible=false;
  
  q2=createSprite(13213,300,5,1000);
  q2.visible=false;
  q2.shapeColor="yellow"
  
  spin4=createSprite(14248,300);
  spin4.addAnimation("rnning",spinimage);
  spin4.scale=1.1
      spin4.setCollider("circle",0,0,120);
  
  rb4=createSprite(2300,-10,900,50);
  rb4.shapeColor="brown"
  rb4.addImage(blockimage);
  
  rb4.visible=false;
  
  rground2=createSprite(2650,650,1800,50);
  rground2.shapeColor="brown";
  rground2.addImage(blockimage)
  rground2.scale=2
  rground2.visible=false;
  
  rg=createSprite(2500,130,20,20);
  rg.shapeColor="orange";
  rg.visible=false;
  
rb5=createSprite(32000000000000000000000000000000000000,420,100,100);
  rb5.visible=false;
  rb5.shapeColor="brown";
  
  lifemeter=createSprite(0,50);
  lifemeter.addImage(lifeimage);
  lifemeter.visible=false;
  lifemeter.scale=0.3;
  
  gun=createSprite(0,0)
  gun.addImage(gunimage);
  gun.scale=0.2;
  gun.visible=false;
  
  rground3=createSprite(4000,200,900,100);
  rground3.visible=false;
  rground3.addImage(block2);
  rground3.scale=2
  rground3.shapeColor="brown";
  rground.depth=2;
  
  

  
  rground4=createSprite(4500,750,1500,100);
  rground4.visible=false;
  rground4.addImage(blockimage);
  rground4.scale=2
  rground4.shapeColor="brown";
  
  yr=createSprite(4800,200,1000,5);
  yr.visible=false;
  yr.visible=false;
  yr.shapeColor="yellow";
  
  spin=createSprite(4200,450,100,100);
  spin.shapeColor="red";

  spin.addAnimation("r2",spinimage)
 
  spin.setCollider("circle",0,0,120);
  
  rc3=createSprite(3600,330,50,200);
  rc3.shapeColor="red";
  rc3.visible=false;
  rc3.depth=1;
  
  rground5=createSprite(6200,400,1500,100);
  rground5.shapeColor="brown";
  rground5.depth=13;
rground5.addImage(block2)
  rground5.scale=3;
  rground5.visible=false;
  
  rb6=createSprite(5700,350,100,100);
  rb6.shapeColor="brown";
  rb6.addImage(blockimage);
  rb6.scale=0.3;
  rb6.depth=0.2
  rb6.visible=false;
  
  rb7=createSprite(6300,350,100,100);
  rb7.shapeColor="brown";
    rb7.addImage(blockimage);
  rb7.scale=0.3;
  rb7.depth=0.2
  rb7.visible=false;
  
  redlazer2=createSprite(6000,340,570,10);
  redlazer2.shapeColor="red";
  redlazer2.depth=0.1
  redlazer2.visible=false;
  
  rb8=createSprite(7500,50,900,50);
  rb8.shapeColor="brown";
  rb8.addImage(block2);
  rb8.scale=2
  rb8.visible=false;
  
  rground6=createSprite(7500,550,900,50);
  rground6.visible=false;
    rground6.addImage(block2);
  rground6.scale=2
  rground6.shapeColor="brown"
  
  rc4=createSprite(6800,350,50,50)
  rc4.shapeColor="red"
  rc4.visible=false;
  rc4.depth=0.1;
  
  rg2=createSprite(7200,80,10,20);
  rg2.shapeColor="orange";
  rg2.visible=false;
  
    rg3=createSprite(7500,80,10,20);
  rg3.shapeColor="orange";
  rg3.visible=false;
  
    rg4=createSprite(7800,80,10,20);
  rg4.shapeColor="orange";
  rg4.visible=false;
  
  rground7=createSprite(8800,650,1000,100);
  rground7.shapeColor="brown";
  rground7.addImage(blockimage);
  rground7.scale=2;
  rground7.visible=false;
  
  yr2=createSprite(8350,300,5,1000);
  yr2.visible=false;
  yr2.shapeColor="yellow";
  
  spin2=createSprite(9000,400);
  spin2.addAnimation("running",spinimage);
  spin2.scale=0.7
      spin2.setCollider("circle",0,0,120);
  
  rground8=createSprite(10200,550,450,100);
  rground8.addImage(blockimage)
  rground8.shapeColor="brown";
  
  rground9=createSprite(11300,550,450,100);
    rground9.addImage(blockimage);
  rground9.scale=0.8
  rground9.shapeColor="brown"
  
  deadline=createSprite(5500,700,50000,100);
  deadline.shapeColor="red";
  deadline.visible=false;
  
   restart=createSprite(100,400);
  restart.visible=false;
  restart.addImage(t)
  restart.scale=0.8
  restart.shapeColor="orange";
  
  home=createSprite(400,400);
  home.visible=false;
  home.shapeColor="red"
  home.addImage(d);
  
  rb9=createSprite(118250000000000000,550,100,400);
  rb9.visible=false;
  rb9.shapeColor="brown";
  
  rb10=createSprite(12200,50,1000,100);
  rb10.addImage(blockimage);
  rb10.scale=1.1
  rb10.shapeColor="brown"
  
  rb11=createSprite(12200,550,1000,100);
    rb11.addImage(blockimage);
  rb11.scale=1.1;
  rb11.visible=false;
  rb11.shapeColor="brown"
  
  rb12=createSprite(12900,300,400,500);
  rb12.addImage(blockimage)
  rb12.shapeColor="brown";
  
  
  button=createSprite(12000,400,10,30);
  button.shapeColor="green"
  button.depth=0.1;
  
  gate=createSprite(12400,300,50,450);
  gate.shapeColor="brown";
  gate.depth=0.1;
  
  trophy=createSprite(12550,300,50,50);
  trophy.shapeColor="yellow";
  
  next2=createSprite(550,550,100,100);
  next2.shapeColor="lime";
  next2.addImage(level2);
  next2.scale=0.5
  next2.visible=false;
  
  
  //level 222222222222222222222222222222222222222222
  
  q=createSprite(6021.65,300,5,1000);
  q.visible=false;
  q.shapeColor="yellow"
  
  l2b1=createSprite(50,-109,1000,100);
 l2b1.visible=false;
  l2b1.addImage(blockimage);
  l2b1.scale=2;
  
  l2b2=createSprite(-50,300,1000,100);
l2b2.visible=false;
  l2b2.scale=3;
  l2b2.addImage(block2)
  
  l2b3=createSprite(5000000000000,400,100,300);
  l2b3.visible=false;
  
  l2b4=createSprite(600,750,1000,100);
  l2b4.addImage(blockimage);
  l2b4.scale=2;
  l2b4.visible=false;
  
  l2b5=createSprite(1200,250,500,100);
  l2b5.addImage(blockimage);
  l2b5.scale=0.6
  l2b5.visible=false;
  
  l2ground=createSprite(1800,650,500,100);
  l2ground.addImage(blockimage)
  l2ground.visible=false;
  
  l2b6=createSprite(2075,500,200,350);
 l2b6.addImage(z);
  l2b6.scale=1.8
  l2b6.visible=false;
  
  l2ground2=createSprite(2830,600,900,100);
  l2ground2.addImage(block2);
  l2ground2.scale=1.8
  l2ground2.visible=false;
  
  l2b7=createSprite(2800,50,900,100);
    l2b7.addImage(block2);
  l2b7.scale=2
  l2b7.visible=false;
  
  l2ground3=createSprite(3800,550,600,100);
  l2ground3.addImage(blockimage)
  l2ground3.visible=false;
  
  l2b8=createSprite(3370,400,100,400);
  l2b8.addImage(z);
  l2b8.visible=false;
  
  l2ground4=createSprite(5800,550,50,100);
  l2ground4.visible=false;
  
  l2ground5=createSprite(6500,700,900,400)
  l2ground5.addImage(blockimage);
  l2ground5.scale=1.5;
  l2ground5.visible=false;
  
  l2ground6=createSprite(7600,650,900,50);
  l2ground6.addImage(blockimage);
  l2ground6.scale=1.5
  l2ground6.visible=false;
  
  slid=createSprite(8000,300,200,30);
  slid.addImage(base);
  slid.visible=false;
  
  o=createSprite(8000,260,500,10);
  o.visible=true;
  o.shapeColor="yellow"
 // dewhfuowhfouhfoehfoehfweohfurwofho3ovhnoehouhfourhvfohfohohfgiuwohc 
  l2c1=createSprite(800,500,50,50);
  l2c1.shapeColor="red";
  l2c1.visible=false;
  
  l1=createSprite(2535,80,10,10);
  l1.visible=false;
  l1.shapeColor="orange"
  
  l2=createSprite(2820,80,10,10);
  l2.visible=false;
  l2.shapeColor="orange";
  
  l3=createSprite(2934,80,10,10);
  l3.visible=false;
  l3.shapeColor="orange";
  
  l4=createSprite(3126,80,10,10);
  l4.visible=false;
  l4.shapeColor="orange"
  
  l2c2=createSprite(1200,500,100,50)
  l2c2.visible=false;
  l2c2.shapeColor="red"
  
  l2c3=createSprite(2097,250,100,100);
  l2c3.visible=false;
  l2c3.shapeColor="red";
  
  
  l2c7=createSprite(10466,300,300,100);
  l2c7.visible=false;
  l2c7.shapeColor="red"
  
  l2c8=createSprite(17626,250,100,100);
  l2c8.visible=false;
  l2c8.shapeColor="red"
  
  l2c4=createSprite(7517,500,300,100);
  l2c4.visible=false;
  l2c4.shapeColor="red"
  
 l2c5=createSprite(8750,200,50,50);
  l2c5.visible=false;
  l2c5.shapeColor="red"
  
  l2c6=createSprite(9412,500,400,100);
  l2c6.visible=false;
  l2c6.shapeColor="red";
  
  l2ground7=createSprite(8800,300,500,50);
  l2ground7.addImage(blockimage)
  l2ground7.scale=0.7
  l2ground7.visible=false;
  
  l2b9=createSprite(875000000,30,70,70);
  l2b9.visible=false;
  
  l2b10=createSprite(9030000000000000000000000000,300,50,450);
  l2b10.addImage(z)
  l2b10.visible=false;
  
  l2b11=createSprite(9260,700,700,50);
  l2b11.addImage(blockimage);
  l2b11.scale=1.3
  l2b11.visible=false;
  
  l2b12=createSprite(9600,300,300,100);
  l2b12.addImage(blockimage);
  l2b12.scale=0.5;
  l2b12.visible=false;
  
  l2b13=createSprite(10400,300,500,80);
  l2b13.addImage(blockimage)
  l2b13.scale=0.5
  l2b13.visible=false;
  

  
  l2b15=createSprite(11000,-120,1500,80);
    l2b15.addImage(blockimage)
  l2b15.scale=2;
  l2b15.depth=1;
  l2b15.visible=false;
  
  l2b16=createSprite(11000,-1000,1200,60);
  l2b16.addImage(blockimage)
  l2b16.scale=2;
  l2b16.depth=0.1;
  l2b16.visible=false;
  
  l2b17=createSprite(11150,650,150,500);
  l2b17.addImage(blockimage);
  l2b17.scale=1.3;
  l2b17.visible=false;
  
  l2b18=createSprite(11750,300,150,100);
  l2b18.addImage(blockimage);
  l2b18.scale=0.5
  l2b18.visible=false;
  

  

  
  l2b21=createSprite(12630,500,800,80);
  l2b21.addImage(blockimage);
  l2b21.scale=1.2
  l2b21.visible=false;
  

  l2b23=createSprite(13500,400,100,50);
  l2b23.addImage(blockimage);
  l2b23.scale=0.3
  l2b23.visible=false;
  
  l2b24=createSprite(13600,200,100,50);
  l2b24.addImage(blockimage);
  l2b24.scale=0.3
  l2b24.visible=false;
  
  l2b25=createSprite(13800,760,1200,100);
  l2b25.addImage(blockimage);
  l2b25.scale=2
  l2b25.visible=false;
  
  l2b26=createSprite(14800,500,200,300);
  l2b26.addImage(blockimage);
  l2b26.scale=0.3
  l2b26.visible=false;
  
  l2b27=createSprite(15400,200,200,300);
  l2b27.addImage(blockimage);
  l2b27.scale=0.3    
  l2b27.visible=false;
  
  l2b28=createSprite(16000,500,200,300);
    l2b28.addImage(blockimage);
  l2b28.scale=0.9
  l2b28.visible=false;
  
  l2b29=createSprite(16000,100,200,500);
  l2b29.addImage(blockimage);
  l2b29.scale=0.9
  l2b29.visible=false;
  
  l2b30=createSprite(16400,300,50,50);
  l2b30.addImage(blockimage);
  l2b30.scale=0.1
  l2b30.visible=false;
  
  l2b31=createSprite(16600,300,50,50);
    l2b31.addImage(blockimage);
  l2b31.scale=0.1
  l2b31.visible=false;
  
  l2b32=createSprite(16800,300,50,50);
    l2b32.addImage(blockimage);
  l2b32.scale=0.1
  l2b32.visible=false;
  

  
  l2b34=createSprite(17650,300,400,100);
  l2b34.addImage(blockimage);
  l2b34.scale=0.8
  l2b34.visible=false;
  
  
  l2b35=createSprite(18400,0,900,100);
l2b35.addImage(blockimage);
  
  l2b36=createSprite(18400,600,900,100);
  l2b36.addImage(blockimage);
  
  l2b37=createSprite(20300,500,1000,100);
  l2b37.addImage(blockimage);
  l2b37.scale=2
  
  deathpart=createSprite(20500,300,10,10)
  deathpart.visible=false;
  
  button2=createSprite(20400,240,100,100);
  button2.visible=false;
  button2.shapeColor="yellow"
  
  heart=createSprite(58050000000000000000000000,500,30,30);
  heart.visible=false;
  heart.shapeColor="pink"
  
  q3=createSprite(19828.35,300,5,1000);
  q3.shapeColor="yellow";
  q3.visible=false;
  
  l=createSprite(0,50);
  l.addImage(lifeimage)
  l.visible=false;
  l.scale=0.3
  
  
  fnext=createSprite(55000000000000,600,100,100);
  fnext.shapeColor="lime";
  fnext.visible=false;

  
     fch=createSprite(100,400);
  fch.visible=false;
  fch.addImage(t);
  fch.scale=0.8
  fch.shapeColor="orange";
  
  fhome=createSprite(400,400);
  fhome.visible=false;
  fhome.addImage(d);
  fhome.scale=0.8
  fhome.shapeColor="red"
  
  rggroup=new Group();
  rbullet=new Group();
  rg1group=new Group();
  wgroup=new Group();
  group=new Group();
  vgroup=new Group();
  fgroup=new Group();
}

function draw() {
background("black");

  


  
  //level2

  
  
  if(gameState==="start"){
    final.stop();
    e.visible=false;
    back2.visible=false;
    camera.x=300;
    back.visible=false;
        fnext.visible=false;
    next2.visible=false;
    fhome.visible=false;
    fch.visible=false;
    back2.visible=false;
    camera.y=300;
        final.stop();
        starwars.visible=true;
 In.visible=true;
    b.visible=true;
    start.visible=true;
    next.visible=false;
    home.visible=false;
    restart.visible=false;

    if(mousePressedOver(start)&&gameState==="start"){
      gameState="play";
}
    if(mousePressedOver(In)&&gameState==="start"){
      gameState="abc";
    }
    
  }
  
  if(gameState==="abc"){
    start.visible=false;
    In.visible=false;
    back.visible=true;
    b.visible=false;
    starwars.visible=false;
    textFont("Impact");
    fill("yellow");
    textSize(50);
    
    text("INSTRUCTION",260,100);
    textSize(30)
    text("Use left arrow key and right arrow key to move",50,150);
     text("Use Space to jump",50,200);
     text("Use up arrow key to increase speed",50,250);
     text("Be aware from red obstacle",50,300);
    
    if(mousePressedOver(back)&&gameState==="abc"){
      gameState="start"
    }
     
    
  }
  
  if(gameState==="play"){
    starwars.visible=false;
    back2.visible=true;
    e.visible=true;
  if(mousePressedOver(back2)&&gameState==="play"){
    gameState="start";
  }
    final.stop();
    In.visible=false;
    b.visible=false;
    start.visible=false;
    next.visible=true;
    textSize(50);
    fill("red");
    textFont("horror")
    text("Story",200,50);
    textSize(22);
    text("Death star is an artifical pig planet",30,80);
    text("But the main probelm is death star is destroying the birds planet",30,110);
    text("To stop that. Birds have to press yellow button to destroy it.",30,140)


    if(mousePressedOver(next)&&gameState==="play"){
      gameState="ch"
}
  }
  
  
  if(gameState==="ch"){
    final.stop();
    e.visible=false;
    restart.visible=false;
    home.visible=false;
    l.visible=false;
    back2.visible=false;
    li.visible=false;
    next2.visible=false;
        fnext.visible=false;
    fhome.visible=false;
    fch.visible=false;
next.visible=false;
        final.stop();

    red2.visible=true;
    gate.x=12400;
    gate.y=200;
        textFont("Impact");
        fill("cyan")
    textSize(50)
    text("Red",250,50);
    fill("cyan")
    textFont("Impact");
    text("Press red to start",150,550);
    if(mousePressedOver(red2)&&gameState==="ch"){
gameState="play2"
    }
    if(mousePressedOver(red2)){
s.play();
    }


  }
  
  
  
  if(gameState==="play2"){
  //  l2b11.visible=true
rb12.visible=true;
    o.visible=false;
l.visible=false;
       v1.visible=false;
  v2.visible=false;
   v3.visible=false;
   v4.visible=false;
   v5.visible=false;
   v6.visible=false;
   v7.visible=false;
   v8.visible=false;
    
    
    next2.visible=false;
    l2c1.visible=false;
    spin5.visible=false;
    spin4.visible=false;
    spin3.visible=false;
        final.stop();
    l2ground6.visible=false;
    q3.visible=false;
    q2.visible=false;
    q.visible=false;
    rb11.visible=true;
       rground9.visible=true;
   gate.visible=true;
   button.visible=true;
    red.visible=true;
    rb10.visible=true;
    l2ground5.visible=false;
      red.collide(rground);
    button2.visible-=true;
    spin.visible=true;
    red.collide(rb11)
    l2c8.visible=false;
   
    l2c6.visible=false;
    rground8.visible=true;
    l2c5.visible=false;
  red.collide(rb1);
    l2c7.visible=false;
    l1.visible=false;
  red.collide(rb2);
    l2c6.visible=false;
    l2c4.visible=false;
    l2b11.visible=false;
  red.collide(rb4);
    l2c3.visible=false;
    heart.visible=false;
    slid.visible=false;
red.collide(rb5);
    l2c2.visible=false;
  red.collide(rb6);
  red.collide(rb7);
   trophy.visible=true;
  red.collide(rground4);
  red.collide(rground3);
  red.collide(rground2);
  red.collide(rground5);
  red.collide(rground8);
  red.collide(rground9);
  red.collide(rb8);
  red.collide(rb10);
  red.collide(rground6);
  spin.collide(rground4);
  spin2.collide(rground7);
  red.collide(rground7);
  red.collide(rb9);
    red.collide(l2b11)
  red.collide(rb12);
  red.collide(gate);
  red.collide(trophy);
    if(red.isTouching(button2)){
      gameState="win2";
      
    }
    deadline.visible=true;
    lifemeter.addImage(lifeimage)
    camera.x=red.x
    gun.x=red.x-12;

    gun.y=red.y+5
    restart.visible=false;
    l2b11.visible=true;
    home.visible=false;
        rb1.visible=true;
    if(frameCount%10===0){
 rb();
      bob2();
      bob4();
      bob3();
    }
   if(red.collide(button)){
     gate.velocityY=-1;
     
   }
    if(red.collide(trophy)&&gameState==="play2"){
      gameState="win"
      li=100
      final.play();
    }
    
        if(frameCount%30===0){

          umwall2();
    }
    
    
    if(keyDown("up")){
saber();
      red.x=red.x+15
    }
    spin.velocityY=spin.velocityY+22
    spin2.velocityY=spin2.velocityY+22
    red.velocityY=red.velocityY+2
  if(keyWentDown("space")&&red.y>200){
red.velocityY=-35
  }
    
   if( rggroup.isTouching(rground2)){
     rggroup.destroyEach();
}
    
       if( rg1group.isTouching(rground6)){
     rg1group.destroyEach();
}

    
    if(keyWentDown("enter")){
      gun.visible=true;
redgun();
    }
    if(keyWentUp("enter")){
gun.visible=false;
      br=br-30;
    }
    if(br===0){
rbullet.destroyEach();
    }
    chuck2.visible=false;
    lifemeter.x=red.x-170
rground.visible=true;
    spin2.visible=true;
    yr2.visible=false;
    rground6.visible=true;
  red2.visible=false;
       rb2.visible=true;
    rg2.visible=true;
      redlazer1.visible=true;
  red.visible=true;
    rc1.visible=true;
    rc2.visible=true;
    rc3.visible=true;
    rc4.visible=true;
    rb4.visible=true;
    rb5.visible=true;
    rb6.visible=true;
    rg.visible=true;
    rg3.visible=true;
    rg4.visible=true;
    rb8.visible=true;
    redlazer2.visible=true;
    rb7.visible=true;
    spin.visible=true;
    yr.visible=false;
    rground4.visible=true;
    rground5.visible=true;
    lifemeter.visible=true;
  rground2.visible=true;
    rground7.visible=true;
rb5.visible=true;
    red.collide(wgroup);
    rground3.visible=true;
    
    if(keyDown("right")){
      red.x=red.x+9
      red.addImage(redimage);
    }
    
    
    if(keyDown("left")){
red.x=red.x-9
      red.addImage(redbackimage)
    }
    if(red.isTouching(yr)){
spin.velocityX=19;
}
        if(red.isTouching(yr2)){
      spin2.velocityX=-10
    }
    
red.velocityY=red.velocityY+0.8
    stroke("white");
  strokeWeight(12);
  fill("red");
    textFont("Impact");
    textSize(40)
  text("Press left and right to move. ",200,300);
    text("Press space to jump.",1000,100);
    if(spin.collide(deadline)){
spin.x=4000
  spin.y=450
      spin.velocityX=0;
    }
    if(spin2.collide(deadline)){
  spin2.x=9000;
spin2.y=400
      spin2.velocityX=0;
    }
  
  
  
  if(red.isTouching(redlazer1)||red.isTouching(redlazer2)||red.isTouching(rc1)||red.isTouching(rc2)||red.isTouching(rggroup)||red.isTouching(rg1group)||red.isTouching(rc4)||red.isTouching(rc3)&&gameState==="play2"){
life=life-10
    red.x=red.x-40
  }
  if(red.isTouching(spin)||red.isTouching(spin2)){
     life=life-50
    red.x=red.x+10
     
     }
  
  if(red.isTouching(deadline)&&gameState==="play2"){
    
   gameState="end"
  }
  
  if(life<=75){
lifemeter.addImage(medium)
  }
  if(life<=50){
    lifemeter.addImage(half)
  }
  if(life<=25){
lifemeter.addImage(low);
  }
  if(life<=10){
lifemeter.addImage(verylow);
     }
  if(life<=0){
gameState="end"
    red.x=300;
    
  }
  
  }
  
  if(gameState==="win"){
    s.stop();
    red.x=300;
    slid.x=8000;
        spin3.velocityY=0;
    spin3.velocityX=0;
    spin4.velocityY=0;
    spin4.velocityX=0;
    slid.velocityX=0;
    gate.velocityY=0;
l2c2.visible=false;
em.stop();
    home.visible=true;
    spin.velocityY=0;
    spin2.velocityY=0;
    l2c8.visible=false;
    l2c6.visible=false;
    l1.visible=false;
    l2c6.visible=false;
    l2.visible=false;
    l3.visible=false;
    l2c7.visible=false;
    l4.visible=false;
    l2c4.visible=false;
    l2c3.visible=false;
red.visible=false;
    chuck.visible=false;
    rb1.visible=false;
    redlazer1.visible=false;
    rground.visible=false;
    next2.visible=true;
 camera.x=340
   restart.visible=true;
    red.x=300;
    red.y=240;
chuck.x=300;
    chuck.y=300
    k();
    textSize(140);
    textFont("Impact");
    fill("cyan")
    text("YOU WIN",80,200);
    gate.x=12400;
    gate.y=200;
    if(mousePressedOver(restart)&&gameState==="win"){
gameState="ch"
      li=100

    }
      if(mousePressedOver(home)&&gameState==="win"){
gameState="start"
      life=100
    }
    if(mousePressedOver(next2)){
gameState="level2"
      life=100;
         lifemeter.visible=true;
      em.play();
    }
    
        if(keyWentDown("enter")){
      gun.visible=true;
redgun();
    }
    if(keyWentUp("enter")){
gun.visible=false;
      br=br-30;
    }
    
    
  }
  
 if(gameState==="level2"){
       if(frameCount%20===0){
      a();
    }
   if(frameCount%15===0){
     p();
   }
   if(vgroup.isTouching(l2b36)){
vgroup.destroyEach();
   }
   if(red.isTouching(group)){
     li=li-10;
     red.x=red.x-50
   }
   final.stop();
   v1.visible=true;
  v2.visible=true;
   v3.visible=true;
   v4.visible=true;
   v5.visible=true;
   v6.visible=true;
   v7.visible=true;
   v8.visible=true;
   gate.visible=false;
   spin5.collide(l2b37);
   spin.visible=true;
   spin3.collide(l2ground5)
   q3.visible=false;
   spin3.visible=true;
   spin4.visible=true;
   q2.visible=false;
   l.addImage(lifeimage)
   q.visible=false;
   
   if(frameCount%40===0){
   umwall3();
     umwall4();
     umwall5();
     umwall6();
   }
red.collide(wgroup);
   l1.visible=true;
   l2c4.visible=true;
   button2.visible=true;
   if(red.isTouching(button2)&&gameState==="level2"){
     gameState="win2"
     final.play();
     red.x=200
   }
   l2.visible=true;
   l3.visible=true;
   l4.visible=true;
   
   l2c6.visible=true;
   l2c7.visible=true;
   lifemeter.visible=true;
      l2b35.visible=true;
   l2c3.visible=true;
   l4.visible=true;
   l2b36.visible=true;
       l.x=red.x-170
   l2c2.visible=true;
   l.visible=true;
   rground9.visible=false;
    lifemeter.addImage(lifeimage)
   rb9.visible=false;
   rb10.visible=false;
   l2b25.visible=false;
   l2b37.visible=true;
   red.collide(l2b37)
   red.collide(l2b29);
   red.collide(l2b30);
   
   red.collide(l2b36)
   if(group.isTouching(l2ground2)){
     group.destroyEach();
   }
   red.collide(l2b31);
   red.collide(l2b32);
   red.collide(l2b37);

   l2b29.visible=true;
   l2b30.visible=true;
   l2b31.visible=true;


   rb12.visible=true;
   rb11.visible=true;
   red.visible=true;
   l2c5.visible=true;
   l2b32.visible=true;

   red.collide(l2b25);
   rb11.visible=false;
   l2b21.visible=true;
   red.collide(l2b21);
   if(red.isTouching(heart)){
     red.li=100
     heart.x=-20000
   }
   l2c8.visible=true;
   rb12.visible=false;
   l2b18.visible=true;

   red.collide(l2b18);
 
     red.collide(l2b1);
   red.collide(l2ground7);
   heart.visible=true;
   l2ground7.visible=true;
  red.collide(l2b2);
   red.collide(l2b3);
   red.collide(l2b6);
   red.collide(l2ground5)
   red.collide(l2ground2);
   red.collide(l2b12)

   l2b35.visible=true;
   l2b36.visible=true;
red.visible=true;

   l2ground6.visible=true;
   slid.visible=true;
       lifemeter.visible=true;
   red.collide(l2b7);
   red.collide(slid);
   red.collide(l2ground6);
   red.collide(l2b8);
   red.collide(l2b23);
   l2b27.visible=true;

   red.collide(l2b27);
   l2b23.visible=true;
   red.collide(l2b10);
   red.collide(l2b9);
   red.collide(l2b17);
   l2b17.visible=true;
   red.collide(l2b11);
   red.collide(l2b13);
   l2b16.visible=false;
   red.collide(l2b16)
   l2b10.visible=true;
   l2b8.visible=true;
   l2b34.visible=true;
   red.collide(l2b34)
   l2b12.visible=true;
   l2b13.visible=true;

   l2b24.visible=true;
   red.collide(l2b15)
   red.collide(l2b24)
   red.collide(l2b35);
   red.collide(l2b26);

   l2b9.visible=true;
   l2ground6.visible=true;
   red.collide(l2ground3);
red.collide(l2b4);
   red.collide(l2b5);
   red.collide(l2b26);
   l2b26.visible=true;
   red.collide(l2ground4);
   red.collide(l2ground);
   l2b23.visible=true;
   red.collide(l2b23)
   l2c6.visible=true;
   red.collide(l2b23);
   l2ground3.visible=true;
   l2ground.visible=true;
   l2ground2.visible=true;
   l2ground4.visible=true;
   l2b29.visible=true;
   deadline.visible=true;
   button.visible=false;
   l2b25.visible=true;
   red.collide(l2b25)
   trophy.visible=false;
   l2b4.visible=true;
   l2b1.visible=true;
   l2b2.visible=true;
   l2b3.visible=true;
   l2b6.visible=true;
   l2b15.visible=true;
   l2b16.visible=true;
   l2ground5.visible=true;
   yr.visible=false;
   yr2.visible=false;
   spin.visible=false;
   spin2.visible=false;

   rground8.visible=false;
   next2.visible=false;
    deadline.visible=true;
     l2c1.visible=true;
    chuck2.visible=false;
    lifemeter.x=red.x-170
rground.visible=false
    rground6.visible=false;
  red2.visible=false;
       rb2.visible=false;
   l2b5.visible=true;
   l2b7.visible=true;
    rg2.visible=false;
      redlazer1.visible=false;
    rc1.visible=false;
    rc2.visible=false;
    rc3.visible=false;
    rc4.visible=false;
    rb4.visible=false;
    rb5.visible=false;
    rb6.visible=false;
    rg.visible=false;
    rg3.visible=false;
   spin4.collide(l2b25)
    rg4.visible=false;
    rb8.visible=false;
    redlazer2.visible=false;
   k()
   l2b28.visible=true;
   red.collide(l2b28);
   l2b2.visible=true;
   red.collide(l2b29);
    rb7.visible=false;
    spin.visible=false;
    yr.visible=false;
    rground4.visible=false;
    rground5.visible=false;

    lifemeter.visible=false;
  rground2.visible=false;
    rground7.visible=false;
rb5.visible=false;

    rground3.visible=false;
    lifemeter.addImage(lifeimage)
    camera.x=red.x
    gun.x=red.x-12;
    restart.visible=false;
    home.visible=false;
    gun.y=red.y+5
      red.velocityY=red.velocityY+2
  if(keyWentDown("space")&&red.y>200){
red.velocityY=-35
  }
   
   if(red.isTouching(l2c1)||red.isTouching(l2c2)||red.isTouching(l2c3)||red.isTouching(l2c4)||red.isTouching(l2c5)||red.isTouching(l2c6)||red.isTouching(l2c7)||red.isTouching(l2c8)){
li=li-10;
     red.x=red.x-50;
   }
    spin3.velocityY=spin3.velocityY+22
       spin4.velocityY=spin4.velocityY+22
   if(red.isTouching(q)){
     spin3.velocityX=-20
   }
   if(red.isTouching(vgroup)){
li=li-10
     red.x=red.x-50
   }
   if(fgroup.collide(l2b17)){
     fgroup.destroyEach();
   }
      if(red.isTouching(fgroup)){
li=li-15
     red.x=red.x-50
   }
   if(spin3.isTouching(deadline)){
     spin3.x=6763;
     spin3.y=300;
     spin3.velocityX=0;
     spin3.velocityY=0;
   }
   if(spin3.isTouching(red)){
     li=li-80
   }
   
      if(red.isTouching(q2)){
     spin4.velocityX=-24
   }

      if(spin4.isTouching(red)){
     li=li-80
   }
   
   if(spin4.isTouching(deadline)){
     spin4.x=14248
          spin4.y=300;
     spin4.velocityX=0;
     spin4.velocityY=0;
   }
   
   
        if(keyDown("up")){
saber();
      red.x=red.x+15
    }
    
        if(keyDown("right")){
      red.x=red.x+15
      red.addImage(redimage);
    }
   if(red.isTouching(o)){
     slid.velocityX=12
     red.velocityX=0;
   }
   if(red.isTouching(slid)){
     red.velocityX=-2
   }
    
    
    if(keyDown("left")){
red.x=red.x-10
      red.addImage(redbackimage)
    }
    red.velocityY=red.velocityY+0.8
      if(red.isTouching(deadline)&&gameState==="level2"){
        final.stop();
   gameState="end"
        red.x=300;
        camera.x=370
  }
     if(li<=75){
l.addImage(medium)
  }
  if(li<=50){
    l.addImage(half)
  }
  if(li<=25){
l.addImage(low);
  }
  if(li<=10){
l.addImage(verylow);
     }
  if(li<=0){
gameState="end"
    red.x=200
    red.y=300;
  }
   
   
   
   
  
 }
  

  
  if(gameState==="end"){
em.stop();
    lifemeter.visible=false;
        slid.x=8000;
           v1.visible=false;
  v2.visible=false;
   v3.visible=false;
    slid.velocityX=0;
        final.stop();
    spin.velocityY=0;
    spin2.velocityY=0;
    spin3.velocityY=0;
    spin3.velocityX=0;
    spin4.velocityY=0;
    spin4.velocityX=0;
    spin5.velocityY=0;
    final.stop();
   l2ground3.visible=false;
    l2b12.visible=false;
    l2c8.visible=false;
      spin2.x=9000;
spin2.y=400
    l2b28.visible=false;
    l2c4.visible=false;
    l2b16.visible=false;
    spin.x=4000
  spin.y=450
    l2c7.visible=false;
    l2c5.visible=false;
    l1.visible=false
    l2.visible=false;
    l3.visible=false;
    l4.visible=false;
    l.visible=false;
       l2b29.visible=false;
   l2b30.visible=false;
   l2b31.visible=false;

   l2b32.visible=false;
    l2b10.visible=false;
    l2b21.visible=false;
  
    l2b25.visible=false;
    l2b26.visible=false;
    l2b17.visible=false;

    l2b18.visible=false;
    l2b27.visible=false;
    l2b15.visible=false;
    l2b23.visible=false;

    l2b13.visible=false;
    l2b11.visible=false;
    l2b9.visible=false;
    l2ground6.visible=false;
    l2ground7.visible=false;
   l2ground.visible=false;
    l2c1.visible=false;
   l2ground2.visible=false;
   l2ground4.visible=false;
   deadline.visible=false;
   l2b4.visible=false;
   l2b1.visible=false;
   l2b2.visible=false;
    l2b29.visible=false;
   l2b3.visible=false;
    l2b5.visible=false;
   l2b6.visible=false;
    l2b8.visible=false;
    l2b23.visible=false;
    l2b7.visible=false;
    s.stop();
    home.visible=true;
    red.velocityY=0;
    red.velocityX=0;
red.visible=false;
    chuck.visible=false;
    rb1.visible=false;
    redlazer1.visible=false;
    rground.visible=false;
 camera.x=340
   restart.visible=true;
    textSize(140);
    textFont("Impact");
    fill("red")
    text("YOU LOSE",100,200);
    if(mousePressedOver(restart)&&gameState==="end"){
gameState="ch"
      life=100
          red.x=50;
    red.y=300;

    }
      if(mousePressedOver(home)&&gameState==="end"){
gameState="start"
      life=100
            red.x=50;
    red.y=300;
    }
  }
  if(gameState==="win2"){
       v1.visible=false;
    l.visible=false;
  v2.visible=false;
   v3.visible=false;
    spin3.velocityY=0;
        spin3.velocityY=0;
    spin3.velocityX=0;
    spin4.velocityY=0;
    spin4.velocityX=0;
    red.visible=false;
    spin4.velocityY=0;
        slid.x=8000;
    slid.velocityX=0;
    spin5.velocityY=0;
    camera.x=300;
  em.stop();
     spin.velocityY=0;
    spin2.velocityY=0;
    camera.y=300;
    red.x=300;
    red.y=300;
    red.velocityY=0;
    //final.play();
      spin2.x=9000;
spin2.y=400
    fill("cyan");
    spin.x=4000
  spin.y=450
    textSize(140);
    textFont("Impact");
    fill("cyan")
    text("YOU WIN",70,200);
l2b1.visible=false;
 l2b2.visible=false;
 l2b3.visible=false;
 l2b4.visible=false;
 heart.visible=false;
 l2b5.visible=false;
 l2b6.visible=false;
 l2b7.visible=false;
 l2b8.visible=false;
 l2b9.visible=false;
 l2b10.visible=false;
 l2b11.visible=false;
 l2b12.visible=false;
l2b13.visible=false;

 l2b15.visible=false;
 l2b16.visible=false;
 l2b17.visible=false;
 l2b18.visible=false;


 l2b21.visible=false;

    
    
    
    
    
 l2b23.visible=false;
 l2b24.visible=false;
 l2b25.visible=false;
 l2b26.visible=false;
 l2b27.visible=false;
 l2b28.visible=false;
 l2b29.visible=false;
 l2b30.visble=false;
 l2b31.visible=false;
 l2b32.visible=false;

 l2b34.visible=false;
 l2b35.visible=false;
 l2b36.visible=false;
 l2b37.visible=false;

 l1.visible=false;
 l2.visible=false;
    fch.visible=true;
    fhome.visible=true;
 l3.visible=false;
 l4.visible=false;
 l2ground.visible=false;
 l2ground2.visible=false;
 l2ground3.visible=false;
 l2ground4.visible=false;
 l2ground5.visible=false;
 l2ground7.visible=false;
    fnext.visible=true;
    fhome.visible=true;
    fch.visible=true;
 l2c4.visible=false;
 l2c5.visible=false;
 l2c6.visible=false;
 l2c7.visible=false;
 slid.visible=false;

 button2.visible=false;
    

    if(mousePressedOver(fhome)&&gameState==="win2"){
gameState="start";
    }
    if(mousePressedOver(fch)&&gameState==="win2"){
gameState="ch";
    }
    
    
  }
  console.log(red.x);
  

  
  
  
  
  

  drawSprites();
}
function saber(){

}

function rb (){

var b=createSprite(0,0,10,10);
    b.x=rg.x;
    b.y=rg.y;
    b.shapeColor="red";
  b.velocityY=10;
rggroup.add(b)  

}

function bob2(){
  var b=createSprite(0,0,10,10);
    b.x=rg2.x;
    b.y=rg2.y;

    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function bob3(){
  var b=createSprite(0,0,10,10);
    b.x=rg3.x;
    b.y=rg3.y;
    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function bob4(){
  var b=createSprite(0,0,10,10);
    b.x=rg4.x;
    b.y=rg4.y;
    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function redgun(){
var bullet=createSprite(0,0,10,2);
  bullet.x=red.x;
  bullet.y=red.y+10
  bullet.shapeColor="red";
  bullet.velocityX=22;
  redgun.life=19
rbullet.add(bullet);
}


function umwall2(){
var w=createSprite(10800,600,200,10);
  w.velocityY=-8;
    w.addImage(base);
  w.scale=0.5
  w.shapeColor="brown";
  wgroup.add(w);
}
function umwall3(){
var w=createSprite(4400,600,200,10);
  w.velocityY=-8;
      w.addImage(base);
  w.scale=0.7
  w.shapeColor="brown";
  wgroup.add(w);
}

function umwall4(){
var w=createSprite(4800,0,200,10);
  w.velocityY=8;
      w.addImage(base);
  w.scale=0.7
  w.shapeColor="brown";
  wgroup.add(w);
}

function umwall5(){
var w=createSprite(5100,600,200,10);
  w.velocityY=-8;
      w.addImage(base);
  w.scale=0.7
  w.shapeColor="brown";
  wgroup.add(w);
}
function umwall6(){
var w=createSprite(5400,0,200,10);
  w.velocityY=8;
      w.addImage(base);
  w.scale=0.7
  w.shapeColor="brown";
  wgroup.add(w);
}
function k(){
  var b=createSprite(2535,80,10,10);
      b.x=l1.x;
    b.y=l1.y;
    b.shapeColor="red";
  b.velocityY=10;
group.add(b)  ;
    var b2=createSprite(0,0,10,10);
        b2.x=l2.x;
    b2.y=l2.y;
    b2.shapeColor="red";
  b2.velocityY=10;
group.add(b2)  ;
    var b3=createSprite(0,0,10,10);
        b3.x=l3.x;
    b3.y=l3.y;
    b3.shapeColor="red";
  b3.velocityY=10;
group.add(b3)  ;
    var b4=createSprite(0,0,10,10);
        b4.x=l4.x;
    b4.y=l4.y;
    b4.shapeColor="red";
  b4.velocityY=10;
group.add(b4)  ;

}
function a(){
  var b=createSprite(0,0,10,10);
    b.x=v1.x;
    b.y=v1.y;
    b.shapeColor="red";
  b.velocityY=10;
vgroup.add(b)  
    var b2=createSprite(0,0,10,10);
    b2.x=v2.x;
    b2.y=v2.y;
    b2.shapeColor="red";
  b2.velocityY=10;
vgroup.add(b2)  
  
    var b3=createSprite(0,0,10,10);
    b3.x=v3.x;
    b3.y=v3.y;
    b3.shapeColor="red";
  b3.velocityY=10;
vgroup.add(b3)  
}


function p(){
  var b=createSprite(0,0,10,10);
    b.x=v4.x;
    b.y=v4.y;
    b.shapeColor="red";
  b.velocityY=15;
fgroup.add(b)  
    var b2=createSprite(0,0,10,10);
    b2.x=v5.x;
    b2.y=v5.y;
    b2.shapeColor="red";
  b2.velocityY=15;
fgroup.add(b2)  
  
    var b3=createSprite(0,0,10,10);
    b3.x=v6.x;
    b3.y=v6.y;
    b3.shapeColor="red";
  b3.velocityY=15;
fgroup.add(b3)  
  
      var b4=createSprite(0,0,10,10);
    b4.x=v7.x;
    b4.y=v7.y;
    b4.shapeColor="red";
  b4.velocityY=15;
fgroup.add(b4) 
  
      var b5=createSprite(0,0,10,10);
    b5.x=v8.x;
    b5.y=v8.y;
    b5.shapeColor="red";
  b5.velocityY=15;
fgroup.add(b5) 
  
}


