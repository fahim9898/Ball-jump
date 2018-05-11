class Wall{
  constructor(){
  this.locationA=createVector(width,height-heightBall+15);        //location A of wall above "heightBall"//15 is circle radious
  // this.locationB=createVector(width+(width*0.9),height-heightBall+15); // secound wall location
  this.speed=createVector(-4,0);                                 //speed of wall
  this.wallHeight=50;                        //wall height
  this.wallWidth=20;                         //wall width
}
show(){
   fill(255);
   rect(0,height-heightBall+15,width,10);   // "15" is circle  radious
   rect(this.locationA.x,this.locationA.y,this.wallWidth,-this.wallHeight);                   //first wall
    // rect(this.locationB.x,this.locationB.y,this.wallWidth,-this.wallHeight);                  //secound wall
   noFill();
}
 wallMove(){
   this.locationA.add(this.speed);
    // this.locationB.add(this.speed);
    if(this.locationA.x<0){
      this.locationA=createVector(width,height-heightBall+15);
      // this.locationB=createVector(width+(width*0.9),height-heightBall+15);
    }
 }
}
