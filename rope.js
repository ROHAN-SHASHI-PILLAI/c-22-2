class rope{
constructor(body1,body2,pointA,pointB)
{

this.pointA=pointA;
this.pointB=pointB;

var options={
bodyA:body1,
bodyB:body2,	
pointB:{x:this.pointA,y:this.pointB}
}

//create rope constraint here
this.rope=Constraint.create(options) 
World.add(world,this.rope);

}
//create display() here (){
display(){
var pointA= this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;
strokeWeight(2);
line(this.rope.pointA.x,this.rope.pointA.y,bob1.position.x,bob1.position.y);
line(this.rope.pointA.x,this.rope.pointA.y,bob2.position.x,bob2.position.y);
line(this.rope.pointA.x,this.rope.pointA.y,bob3.position.x,bob3.position.y);
line(this.rope.pointA.x,this.rope.pointA.y,bob4.position.x,bob4.position.y);
line(this.rope.pointA.x,this.rope.pointA.y,bob5.position.x,bob5.position.y);
}
}
