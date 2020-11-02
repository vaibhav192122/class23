class Box{
constructor(x,y,width,height){
    var options={
        restitution:1.0,
        density:1.0,
        friction:1.0
    }
   this.body=Bodies.rectangle(x,y,width,height,options);
   World.add(world,this.body); 
   this.w=width;
   this.h=height;
}

display(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER)
    fill("yellow");
    rect(0,0,this.w,this.h);
    pop();
}


}