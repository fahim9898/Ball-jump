var maxC=15
var heightBall=70;                       //bottum to height
class Ball{
  constructor(){
    this.location=createVector(75,height-heightBall);          //LOCATION
    // this.velocityY=12;
    this.maxCycle=maxC;                          //MAX number of cycle
    this.gravitySpeed=7;                            //GRAVITATION FORCE
    this.upforce=15;                                //UPFORCE
    this.cycleCount=10;                             //number of time cycle repeate ..apply upforce
    this.colourA=random(0,255);
    this.colourB= random(0,255);                                     //MAX number of cycle
    this.colourC= random(0,255);
    // maxCycle=15;
  }
  gravity(){                                         //APPLAY GRAVITY FORCE
     if(height-heightBall>=this.location.y){
    this.location.y+=this.gravitySpeed;
        }
        if(this.location.y>0){
             if(this.cycleCount<this.maxCycle){                                   //CONTROLL UPFORCE ....
                   this.location.y=controll_upforce(this.location.y,this.upforce);
                   this.cycleCount++;                            //WHEN key is pressed cyclecount is zero;
       }
     }
  }

  show(){                                               //DISPLAY BALL
    // stroke();
    fill(this.colourA,this.colourB,this.colourC);
    ellipse(this.location.x,this.location.y,30,30);
    noFill();
  }
   upForce(x){                                      //WHEN key is pressed cyclecount is zero;
  // ----If ball return orignal state then key pressed then apply force.
  //----Else force not apply
/*....Ball position alwase change between show that under condition.when key pressed.......*/
    this.maxCycle=15;
     if(this.location.y>(height-heightBall-10) && this.location.y<(height-heightBall+10)){
     this.cycleCount=0;
  }
  this.maxCycle=this.maxCycle*x
   }
 }
  function  controll_upforce(locationY,upforce){        //.......""APPLAY UPFORCE"".........//
     // console.log(1);
          locationY-=upforce;
        return locationY;
}
