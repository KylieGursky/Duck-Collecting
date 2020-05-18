let level = 0;
let me2;

let farmhouse;
let rowboat;
let truck;
let me;
let ducks;
let duck1;
let duck2;
let duck3;
let duck4;
let duck5;
let duck6;
let duck7;
let duck8;
let duck9;

function preload() {
farmhouse = loadImage('pictures/farmhouse.png')
rowboat = loadImage('pictures/rowboat.png')
truck = loadImage('pictures/truck.png')
}

function setup() {
  createCanvas(800,400);
  me = new Avatar(width/2,300,3)
  ducks = new Duck(650,250)
  duck1 = new Duck(100,300)
  duck2 = new Duck(400,200)
  duck3 = new Duck(550,100)
  duck4 = new Duck(300,200)
  duck5 = new Duck(680,50)
  duck6 = new Duck(200,350)
  duck7 = new Duck(444,333)
  duck8 = new Duck(350,80)
  duck9 = new Duck(80,250)
  me2 = new Person((width/20, 250, 3);
}

function draw() {
  if (level == 0){
  screen1();
} else if (level == 1){
  screen2();
}
}


function screen1(){
  background("lightblue");
  fill("green");
  rect(0,200,800,400);
  fill(104,185,225);
  ellipse(600,275,200,75);
  noStroke();
  fill("white");
  cloud(200,30)
  cloud(500,40)
  cloud(350,45)
  cloud(650,65)
  cloud(50,68)
  cloud(800,55)

  image(truck,400,185, truck.width/2.5, truck.height/2.5)
  image(rowboat,600,250, rowboat.width/3, rowboat.height/3)
  image(farmhouse,150,60, farmhouse.width / 1.2, farmhouse.height / 1.2)

  me.drawMe();
  me.moveMe();
  me.levelup();

  ducks.collectDuck();
  ducks.drawDuck();
  duck1.collectDuck();
  duck1.drawDuck();
  duck2.collectDuck();
  duck2.drawDuck();
  duck3.collectDuck();
  duck3.drawDuck();
  duck4.collectDuck();
  duck4.drawDuck();
  duck5.collectDuck();
  duck5.drawDuck();
  duck6.collectDuck();
  duck6.drawDuck();
  duck7.collectDuck();
  duck7.drawDuck();
  duck8.collectDuck();
  duck8.drawDuck();
  duck9.collectDuck();
  duck9.drawDuck();

  field(25,270)
  field(50,270)
  field(75,270)
  field(100,270)
  field(125,270)
  field(150,270)
  field(25,280)
  field(50,280)
  field(75,280)
  field(100,280)
  field(125,280)
  field(150,280)
  field(25,290)
  field(50,290)
  field(75,290)
  field(100,290)
  field(125,290)
  field(150,290)
  field(25,300)
  field(50,300)
  field(75,300)
  field(100,300)
  field(125,300)
  field(150,300)
  field(25,310)
  field(50,310)
  field(75,310)
  field(100,310)
  field(125,310)
  field(150,310)
  field(25,320)
  field(50,320)
  field(75,320)
  field(100,320)
  field(125,320)
  field(150,320)
}

function screen2(){
  background(128,128,128)
  world()
  me2.moveMe();
  me2.drawMe();
}


class Avatar{

  constructor(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
  }

  drawMe(){
    stroke("black");
    push()
    strokeWeight(3);
    line(this.x,this.y,this.x,this.y+20)
    line(this.x,this.y+20,this.x-10,this.y+30)
    line(this.x,this.y+20,this.x+5,this.y+25)
    line(this.x+5,this.y+25,this.x+2.5,this.y+30)
    line(this.x,this.y+7.5,this.x-5,this.y+12.5)
    line(this.x-5,this.y+12.5,this.x+5,this.y+17.5)
    pop()
    strokeWeight(1);
    fill("blue");
    ellipse(this.x,this.y,10,10)
  }

  moveMe(){
    if (keyIsDown(UP_ARROW)){
      this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)){
      this.y += this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)){
      this.x += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)){
      this.x -= this.speed;
    }
  }

  levelup(){
    if (this.x <= 20, this.y <= 20){
      level +=1
    }
  }
}

class Duck{

  constructor(x,y){
    this.x = x
    this.y = y
  }

  drawDuck(){
    fill(255,219,77)
    noStroke()
    ellipse(this.x,this.y,10,8)
    ellipse(this.x-3,this.y-4.5,6,6)
    fill("orange")
    ellipse(this.x-6,this.y-4.5,3,2)
  }

  moveDuck(){

  }

  collectDuck(){
    if (this.x >= me.x-15 && this.x<= me.x+15 && this.y > me.y-20 && this.y < me.y+20){
      this.x = 20;
      this.y = 20;
    }
  }
}

function cloud(x,y){
  noStroke();
  fill("white");
  ellipse(x,y,40,20)
  ellipse(x-25,y+5,40,20)
  ellipse(x,y+10,40,20)
  ellipse(x+25,y+5,40,20)
}

function wheat(x,y){
  // x=100 y=300
  stroke(1)
  fill(219,153,0)
  rect(x,y,5,30)
  ellipse(x+3,y,7,13)
  ellipse(x+3,y+2,6,8)
  // ellipse(x+5,y+1,4,8)
}

function field(x,y){
  // x=100 y=300
  wheat(x,y)
  wheat(x+5.5,y)
  wheat(x-5.5,y)
  wheat(x-11,y)
  wheat(x+11,y)
  wheat(x+2,y+5)
  wheat(x+7.5,y+5)
  wheat(x+13,y+5)
  wheat(x-4.5,y+5)
  wheat(x-9,y+5)
}

function world(){
  fill(178,178,178);
  stroke(115,115,115);
  strokeWeight(6);
  rect(0,264,800,136); //floor


  fill(163,204,255); //windows
  stroke(115,115,115);
  strokeWeight(7);
  rect(50,25,300,75);
  rect(450,25,300,75);


  textSize(22);
  fill(0,0,0,40);
  noStroke();
  textFont('Impact');
  text('DUCK CITY SHIPPING CO.', 295, 20);

  fill(51,26,0); //small cylinder
  stroke(77,40,0);
  strokeWeight(2);
  ellipse(60,295,36,10); //bot ellipse
  noStroke();
  rect(42,245,36,50);
  stroke(77,40,0);
  strokeWeight(2);
  ellipse(60,245,36,10); //top ellipse
  line(42,245,42,295);
  line(78,245,78,295);

  stroke(134,89,45); //right crate: 10 width planks
  strokeWeight(3);
  fill(220,160,102);
  rect(165,170,100,130);
  line(210,170,210,300); //verticle left
  line(220,170,220,300); //verticle right

  line(165,230,210,230); //hor mid top left
  line(220,230,265,230); //hor mid top right
  line(165,240,210,240); //hor mid bot left
  line(220,240,265,240); //hor mid bot right

  line(165,190,210,190); //hor top top left
  line(220,190,265,190); //hor top top right
  line(165,200,210,200); //hor top bot left
  line(220,200,265,200); //hor top bot right

  line(165,270,210,270); //hor bot top left
  line(220,270,265,270); //hor bot top right
  line(165,280,210,280); //hor bot bot left
  line(220,280,265,280); //hor bot bot right

  stroke(96,64,32); //left crate: 20 width planks
  strokeWeight(3);
  fill(220,160,102);
  rect(85,200,100,100);
  line(125,200,125,240); //verticle  left
  line(125,260,125,300);
  line(145,200,145,240); //right
  line(145,260,145,300);

  line(85,240,185,240); //horizontal
  line(85,260,185,260);

  fill(134,89,45); //ladder
  stroke(134,89,45);
  strokeWeight(2);
  ellipse(475,175,10,250); //sides
  ellipse(521,175,10,250);
  ellipse(498,280,70,5); //first rung
  ellipse(498,250,70,5); //second rung
  ellipse(498,220,70,5); //third rung
  ellipse(498,190,70,5); //fourth rung
  ellipse(498,160,70,5); //fifth rung
  ellipse(498,130,70,5); //sixth rung
  ellipse(498,100,70,5); //seventh rung
  ellipse(498,70,70,5); //eighth rung

  fill(114,89,65); //platform
  stroke(96,64,32);
  strokeWeight(3);
  rect(535,110,20,190); //supports
  rect(750,110,20,190);
  rect(535,110,235,20); //top

  fill(51,26,0); //plat cylinder
  stroke(103,53,0,70);
  strokeWeight(3);
  ellipse(720,292,40,16); //bot ellipse
  noStroke();
  rect(700,160,40,132);
  stroke(103,53,0,70);
  strokeWeight(3);
  ellipse(720,160,40,16); //top ellipse
  line(700,160,700,292);
  line(740,160,740,292);

  fill(153,102,51); //plat crate
  stroke(103,53,0);
  strokeWeight(4);
  rect(580,220,90,80);
  line(600,220,600,300);
  line(610,220,610,300);
  line(650,220,650,300);
  line(640,220,640,300);

  fill(153,102,51); //far right crate
  stroke(103,53,0);
  strokeWeight(4);
  rect(285,230,50,70);
  line(285,242,335,242); //top plank
  line(285,250,335,250);
  line(285,270,335,270); //bot plank
  line(285,285,335,285);
}

class Person {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke(0,0,0);
        strokeWeight(3);
    		noFill();
		    ellipse(this.x, this.y, 25, 25); //head
        ellipse(this.x+5, this.y+3, 15,13); //mouth
        ellipse(this.x-5, this.y-3, 3, 3); //eye
        line(this.x,this.y+12, this.x, this.y+40); //torso
        line(this.x, this.y+40, this.x-20, this.y+60); //left leg
        ellipse(this.x-15, this.y+60, 10, 5); //left shoe
        line(this.x, this.y+40, this.x+10, this.y+50); //right leg
        line(this.x+10, this.y+50, this.x+5, this.y+60); //right leg
        ellipse(this.x+10, this.y+60, 10, 5); //right shoe
        line(this.x, this.y+15, this.x-10, this.y+25); //top arm
        line(this.x-10, this.y+25, this.x+10, this.y+35); //bottom arm
        fill(51,204,255);
        triangle(this.x-10,this.y-8,this.x+8,this.y-11,this.x-5,this.y-32);
        noFill();
        ellipse(this.x-6,this.y-35,5,5);

	}

	moveMe(){ //475,300  and 521, 300 for bottom then 475,50 and 521, 50 for top of ladder

    if (keyIsDown(LEFT_ARROW)) { // if you hold the left arrow, move down by speed
        this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the left arrow, move down by speed
        this.x += this.speed;
    }

    if (me.x >= 475 && me.x <= 521 && me.y >= 20 && me.y <=254){
      if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
         this.y -= this.speed;
      }
    }

    if (me.x >= 475 && me.x <= 521 && me.y >= 18 && me.y <=250){
      if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
          this.y += this.speed;
      }
    }

    }
  }
