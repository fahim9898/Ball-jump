var population;                                    //variable for class Population
var dna;                                           //variable for class DNA
var parents=[];                                    //SAVE MAXFITNESS DNA
var maxfit=0;                                      //maximum fitness
var fitcount=0;                                    //fitness count
var popSize=10;                                    //popolation size "Number of ball"
var rr=[];                                         //save only Fitness (Not maximum fitness)
var count=0;
var ccc=0;
function setup() {
	createCanvas(500,500);
	population=new Population();                                  //""""set Population"""""""//
	population.popSet();
}

function draw() {
     background(125,125,125);
		 population.popMove();
}
//--------------------------------//
//           POPULATION           //
//--------------------------------//
class Population{
	constructor(){
	// popSize=2;
	this.ball=[];                                            //variable for Ball class
	this.wall;                                            //variable for Wall class
	this.fit=0;                                              //local fitness value (start to zero)
	this.dna;                                                //variable for dna class
	this.upForceCon=[];                                          // controll  up force .when requerment
/*set upForceCon 0 to popsize"0,1,2,3,4,5,6,7,8,9"*/
	for(var i=0;i<popSize;i++){
        this.upForceCon[i]=i;
    }
// this.upForceCon[i]=i;                //"10"
  }
	popSet(){
		for(var i=0;i<popSize;i++){
			 this.ball[i]=new Ball();
		}
		this.wall=new Wall();
		this.dna=new DNA();
	}
	popMove(){
		if(mouseIsPressed){
			console.table(this.dna.gens);
		}
		this.wall.show();                      //   controll wall
		this.wall.wallMove();                  //
		for(var i=0;i<popSize;i++){
			fitcount++;                               //fitness increass
		this.ball[i].gravity();                   //
		this.ball[i].show();                      // Controll Ball

		if(i==0){
		if(count==0){
     rr=this.dna.gens;              //if count and i is zero then rr save local fitness
		 count=1;
		}
	}
	stroke(125,0,0);
	text('Fitness :'  + fitcount + '\nMax Fitness:'+maxfit,300,50);
	stroke(0);
	if(i==0)
	maxC=15;                      //If only i=0 then maxCycle is reset 15
			this.ball[i].upForce(this.dna.gens[this.upForceCon[i]][ccc]);            //Applay  UPFORCE
    if(ccc==10){
			ccc=0;
		}
		this.fit=fitcount;                                         //set fitness
		if(this.fit>maxfit){                        //condtion for Max Fitness
			maxfit=this.fit;
			parents=rr;                       //If condition is true then parants set MAXFITNESS DNA(Local convert into maximum)
		}
		//  if Ball touch the Wall that condition
		if((this.wall.locationA.x-this.ball[i].location.x<15) && ((this.wall.locationA.y-15-this.ball[i].location.y)<15) && ((this.wall.locationA.x-this.ball[i].location.x)>-15)) {
			 this.ball.splice(i,1);    //Ball touch the wall remove from Array
       // If " 4 number " Ball touch the wall
			 // 0,1,2,3,5,6,7,8,9  ball remains
			 this.upForceCon.splice(i,1);        //controll upforce
			 // i--;
			 console.log(1);
			 popSize--;                    //Beacause elemnts remove from array then size is reduce
		}
		if(this.ball.length==0){          //""""""""If All ball Remove then genrate new Population"""""""""//
		 console.log(0);
			popSize=10;                     ////----------------RESET POPSIZE------------------////
			count=0;                        //reset count is zero ( "maxCycle set =15")
      /*Genrate new DNA . For new Population.
      Use ""parents"" genrate new dna
			*/
			this.dna=new DNA(parents);
			this.ran=this.dna.gens;             //Update DNA
			 this.ball=[];                                //
			 this.wall;                                //
			 this.upForceCon=[];                          //
			for(var i=0;i<popSize;i++){                   //
				  this.ball[i]=new Ball();                  //
				 this.upForceCon[i]=i;                      //
				 fitcount=0;                                //
			}                                             //
			this.wall=new Wall();                   //      All reset
			// this.upForceCon[i]=i;                         //
		}
	}
	ccc++;
	}
}
//------------------------------------------------------//
//                      DNA                             //
//------------------------------------------------------//
class DNA{
 constructor(dna){
	 this.gens=[];
	 if(dna){
     this.gens=crossover();                    //genrate gens using parants
 }
 else{
	 for(var i=0;i<=popSize;i++){
		 this.gens[i]=[];
		 for(var k=0;k<=popSize;k++){
			this.gens[i][k]=random(0,2);
		}
	 }
 }
 }
}
function crossover(){
	  var parantsA=[];
		var parantsB=[];
		var child=[];
		parantsA=parents;                             //parents gens value store in parantsA
		for(var i=0;i<popSize;i++){
			parantsB[i]=[];
 		 for(var k=0;k<popSize;k++){
			parantsB[i][k]=random(0,2);                    // random gens value store in parantsB
		}
	}
		var middlePoint=floor(random(0,popSize));      //function for paransA and parantsB genrate child
		for(var i=0;i<popSize;i++){
			child[i]=[];
			for(var k=0;k<popSize;k++){
 		   if(i<middlePoint){
				 child[i][k]=parantsA[i][k];
			 }
			 else{
				 child[i][k]=parantsB[i][k];
			 }
 	 }
 }
	 return child;
}
