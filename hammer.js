class Hammer{

constructor(x,y){

    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
    }

    this.body = Bodies.rectangle(x,y,120,30,options);
    this.width = 120;
    this.height = 30;

    World.add(world, this.body);

}

display(){

    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();


}

}