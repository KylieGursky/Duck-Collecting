let level = 0;
let me;

function setup() {
  createCanvas(500, 400);
  me = new Avatar(width/8,300,3)
}


function draw(){
  if (level == 0){
    screen1();
  } else if (level == 1){
    screen2();
  }
}

function screen1(){
	background("blue");
  fill("green")
  rect(100,100,30,40)

  me.drawMe()
  me.moveMe()
  me.levelup()

}

function screen2(){
    background("green");
    fill("blue")
    rect(100,100,30,40)
  }

  class Avatar{
    constructor(x,y,speed){
     this.x = x
     this.y = y
     this.speed = speed
  }

    drawMe(){
    fill("yellow")
    ellipse(this.x,this.y,20,20)
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
     if (this.x > 200){
       level +=1
     }
   }

 }
